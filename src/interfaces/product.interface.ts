import { z } from "zod";
import { createProductSchema, productSchema, updateProductSchema } from "../schemas/product.schema";

export type TProduct = z.infer<typeof productSchema>;

export type TCreateProductData = z.infer<typeof createProductSchema>;

export type TUpdateProductData = z.infer<typeof updateProductSchema>;