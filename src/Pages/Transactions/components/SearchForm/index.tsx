import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchFormSchema, SearchFormType } from "../../../../validations/searchFormSchema";
import { useTransactionsContext } from "../../../../hooks/useTransactionsContext";

export function SearchForm() {
    const getTransactions = useTransactionsContext("getTransactions");

    const {
        register,
        handleSubmit,
        formState: { isSubmitting } } = useForm<SearchFormType>({
            resolver: zodResolver(searchFormSchema),
        });

    async function handleSearchTransactions(data: SearchFormType) {
        await getTransactions(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                {isSubmitting ? "Buscando..." : "Buscar"}
            </button>
        </SearchFormContainer>
    )
}