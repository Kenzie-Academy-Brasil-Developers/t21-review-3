import { Request, Response } from "express";
import { ProductServices } from "../services/product.services";

export class ProductControllers {
   create(request: Request, response: Response) {
      const productServices = new ProductServices();

      const product = productServices.create(request.body);

      return response.status(201).json(product);
   }

   getMany(request: Request, response: Response) {
      const productServices = new ProductServices();

      const products = productServices.getMany(request.query.search as string);

      return response.status(200).json(products);
   }

   getOne(request: Request, response: Response) {
      const productServices = new ProductServices();

      const product = productServices.getOne(+request.params.id);

      return response.status(200).json(product);
   }

   update(request: Request, response: Response) {
      const productServices = new ProductServices();

      const product = productServices.update(+request.params.id, request.body);

      return response.status(200).json(product);
   }

   remove(request: Request, response: Response) {
      const productServices = new ProductServices();

      const message = productServices.remove(+request.params.id);

      return response.status(200).json({ message });
   }
}
