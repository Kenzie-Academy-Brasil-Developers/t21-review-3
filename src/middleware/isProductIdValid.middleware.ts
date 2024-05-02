import { NextFunction, Request, Response } from "express";
import { productDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsProductIdValid{
    static execute(request: Request, response: Response, next: NextFunction){
        const isProductIdValid = productDatabase.some(product => product.id === +request.params.id);

        if(!isProductIdValid){
            throw new AppError("Product not found.", 404);
        }

        next();
    }
}