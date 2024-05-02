import { generateId, productDatabase } from "../database/database";
import {
   TCreateProductData,
   TProduct,
   TUpdateProductData,
} from "../interfaces/product.interface";

export class ProductServices {
   create(data: TCreateProductData) {
      const now = new Date();

      const newProduct: TProduct = {
         id: generateId(),
         ...data,
         createdAt: now,
      };

      productDatabase.push(newProduct);

      return newProduct;
   }

   getMany(search?: string) {
      const results = search
         ? productDatabase.filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
           )
         : productDatabase;

      return results;
   }

   getOne(id: number) {
      const product = productDatabase.find((product) => product.id === id);

      return product;
   }

   update(id: number, data: TUpdateProductData) {
      const currentProduct = productDatabase.find(
         (product) => product.id === id
      ) as TProduct;

      const now = new Date();

      const updateProduct: TProduct = {
         ...currentProduct,
         ...data,
         updatedAt: now,
      };

      const index = productDatabase.findIndex((product) => product.id === id);

      productDatabase.splice(index, 1, updateProduct);

      return updateProduct;
   }

   remove(id: number) {
      const index = productDatabase.findIndex((product) => product.id === id);

      productDatabase.splice(index, 1);

      return "Product successfully deleted."
   }
}
