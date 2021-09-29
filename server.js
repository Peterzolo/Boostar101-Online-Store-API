import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

import productRouter from "./routes/productRoute.js";

dotenv.config();   

app.use(cors());

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
