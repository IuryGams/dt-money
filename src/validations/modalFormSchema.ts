import {z} from "zod";


export const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
})

export type newTransactionFormType = z.infer<typeof newTransactionFormSchema>