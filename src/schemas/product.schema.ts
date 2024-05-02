import { z } from "zod";

export const productSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1).max(60),
    description: z.string().min(1),
    price: z.number().positive(),
    createdAt: z.date(),
    updatedAt: z.date().optional()
});

export const createProductSchema = productSchema.pick({
    name: true, description: true, price: true
});

export const updateProductSchema = createProductSchema.partial();