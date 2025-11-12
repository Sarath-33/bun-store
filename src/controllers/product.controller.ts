import type { Request, Response } from "express";
import Product from "../models/productModel";

// ✅ Get all products
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(products); // only one response
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error getting products" });
  }
};

// ✅ Get single product
export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error getting product" });
  }
};

// ✅ Create product
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;
  try {
    if (!name || !price || !description || !image) {
      return res.status(400).json({ message: "Every field is required" });
    }
    const product = new Product({ name, price, description, image });
    const savedProduct = await product.save();
    return res.status(201).json({message: "Product created Successfully",savedProduct});
  } catch (error) {
    console.log("Error creating product:", error);
    return res.status(500).json({ message: "Error creating product" });
  }
};

// ✅ Update product
export const updateProduct = async (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;
  try {
    if (!name || !price || !description || !image) {
      return res.status(400).json({ message: "Every field is required" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, image },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({message: "Product Updated Successfully",updateProduct});
  } catch (error) {
    console.log("Error updating product:", error);
    return res.status(500).json({ message: "Error updating product" });
  }
};

// ✅ Delete product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" , deleteProduct});
  } catch (error) {
    console.log("Error deleting product:", error);
    return res.status(500).json({ message: "Error deleting product" });
  }
};
