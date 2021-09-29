import express from "express";
import  {getProductDetail, getProducts } from "../controllers/productController.js";

const router = express.Router();



router.get("/", getProducts)
router.get("/:id", getProductDetail)

export default router;