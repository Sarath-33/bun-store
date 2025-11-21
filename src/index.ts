import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import productRouter from "./routes/product.route";
import userRouter from "./routes/user.route";
import { errorHandler } from "./middleware/errorHander";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1/product", productRouter);
app.use("/api/v1/user/", userRouter);

app.get("/", (req, res) => {
  res.send("Hello from bun + express with ts");
});
app.use(errorHandler)
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`);
  });
});
