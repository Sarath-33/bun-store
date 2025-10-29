import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUser);
userRouter.get("/", createUser);
userRouter.get("/:id", updateUser);
userRouter.get("/:id", deleteUser);

export default userRouter