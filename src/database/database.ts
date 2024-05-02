import { TProduct } from "../interfaces/product.interface";

export const productDatabase: TProduct[] = [];

let id = 0;

export const generateId = () => {
    id++;

    return id;
}