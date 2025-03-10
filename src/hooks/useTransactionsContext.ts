import { TransactionsContext, TransactionsContextType } from "../contexts/transactionsContext";
import { useContextSelector } from "use-context-selector";

export function useTransactionsContext<T extends keyof TransactionsContextType>(key: T) {
  const selectedContextValue = useContextSelector(TransactionsContext, (context) => context[key]);

  return selectedContextValue;
}
