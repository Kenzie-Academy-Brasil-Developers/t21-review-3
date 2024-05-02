import express, { json } from "express";
import helmet from "helmet";
import { productRouter } from "./routes/product.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/products", productRouter);

app.use(HandleErrors.execute);