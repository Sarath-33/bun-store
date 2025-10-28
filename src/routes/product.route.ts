import express from "express"
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/product.controller";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/",createProduct);
router.put("/:id", updateProduct);
router.delete("/:id",deleteProduct)

export default router;