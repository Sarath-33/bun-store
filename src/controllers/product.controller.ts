import type { Request, Response } from "express";
import Product from "../models/productModel";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.find().sort({ createdAt: -1 });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Get a error at getting products" });
  }
  res.json({ message: "Get all the products" });
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product note found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Get a error at getting products" });
  }
  res.send("get a single product");
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;
  try {
    if (!name || !price || !description || !image) {
      return res.status(404).json({ message: "Every field is required" });
    }
    const product = new Product({ name, price, description, image });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.log("You got a error! this is the error: ", error);
  }
  res.send("Create Product");
};
export const updateProduct = async (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;
  try {
    if (!name || !price || !description || !image) {
      return res.status(404).json({ message: "Every field is required" });
    }
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, image },
      { new: true }
    );
  } catch (error) {
    console.log("You got a error! this is the error: ", error);
  }
  res.send("Update the product");
};
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(201).json(deleteProduct);
  } catch (error) {
    console.log("You got a error! this is the error: ", error);
  }
  res.send("Delete the product");
};
