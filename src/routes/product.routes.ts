import { Router } from "express";
import { ProductControllers } from "../controllers/product.controllers";
import { IsProductIdValid } from "../middleware/isProductIdValid.middleware";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { createProductSchema, updateProductSchema } from "../schemas/product.schema";

export const productRouter = Router();
export const productController = new ProductControllers();

productRouter.post(
   "/",
   ValidateBody.execute(createProductSchema),
   productController.create
);
productRouter.get("/", productController.getMany);
productRouter.get("/:id", IsProductIdValid.execute, productController.getOne);
productRouter.patch(
   "/:id",
   ValidateBody.execute(updateProductSchema),
   IsProductIdValid.execute,
   productController.update
);
productRouter.delete("/:id", IsProductIdValid.execute, productController.remove);
