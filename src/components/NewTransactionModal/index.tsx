import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { newTransactionFormSchema, newTransactionFormType } from "../../validations/modalFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";


export function NewTransactionModal() {
    const createTransactions = useTransactionsContext("createTransactions");

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        control,
        reset,
    } = useForm<newTransactionFormType>({
        resolver: zodResolver(newTransactionFormSchema)
    });

    async function handleCreateNewTransaction(data: newTransactionFormType) {
        createTransactions(data);

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X />
                </CloseButton>


                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register("description")}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register("price", { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register("category")}
                    />

                    <Controller control={control} name="type" render={({field}) => {
                        return (
                            <TransactionTypeContainer onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton type="button" value="income" $variant="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton type="button" value="outcome" $variant="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saída
                                </TransactionTypeButton>
                            </TransactionTypeContainer>
                        )
                    }} />



                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}