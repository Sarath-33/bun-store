import type { Request, Response } from "express";
import User from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find().sort({ createdAt: -1 });
    if (!user) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Get a error at getting all Users" });
  }
  res.json({ message: "Get all the users" });
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Get a error at getting all Users" });
  }
  res.send("get a single user");
};
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || password) {
      return res.status(404).json({ message: "All fields are requried" });
    }
    const user = new User({ name, email, password });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Get a error at getting all Users" });
  }
  res.send("Create User");
};
export const updateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(404).json({ message: "Every field is required" });
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );
  } catch (error) {
    console.log("You got a error! this is the error: ", error);
  }
  res.send("Update the User");
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(201).json(deleteUser);
  } catch (error) {
    console.log("You got a error! this is the error: ", error);
  }
};
