import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1/product",)

app.get("/", (req, res) => {
  res.send("Hello from bun + express");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`);
  });
});
