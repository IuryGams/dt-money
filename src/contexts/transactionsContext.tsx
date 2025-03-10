import { ReactNode, useCallback, useEffect, useState } from "react";
import { API } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
    id: number;
    description: string;
    type: "income" | "outcome";
    category: string;
    price: number;
    createdAt: string;
}


export interface TransactionsContextType {
    transactions: Transaction[]
    getTransactions: (query?: string) => Promise<void>
    createTransactions: (data: Omit<Transaction , "id" | "createdAt">) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionsContextType);
TransactionsContext.displayName = "Transactions";


export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);


    const getTransactions = useCallback( async (query?: string) =>  {
        const response = await API.get("/transactions", {
            params: {
                _sort: "createdAt",
                _order: "desc",
                q: query
            }
        })

        setTransactions(response.data);
    }, []) 

    const createTransactions = useCallback( async (data: Omit<Transaction, "id" | "createdAt">) => {
        const { description, price, category, type } = data;

        const response = await API.post("/transactions", {
            description,
            price,
            category,
            type,
            createdAt: new Date().toISOString()
        });

        setTransactions(prev => [response.data, ...prev]);
    }, [])

    useEffect(() => {
        getTransactions();
    }, [getTransactions]);

    return (
        <TransactionsContext.Provider value={{
            transactions,
            getTransactions,
            createTransactions
        }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}