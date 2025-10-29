import express from "express"
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getProduct);
productRouter.post("/",createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id",deleteProduct)

export default productRouter;