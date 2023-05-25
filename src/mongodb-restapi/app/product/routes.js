import express from "express";
import multer from "multer";

import {
  deleteProduct,
  getAllProducts,
  getProduct,
  postProduct,
} from "./controller.js";

const router = express();
const uploads = multer({ dest: "assets" });

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.post("/product", uploads.single("image"), postProduct);
router.delete("/product/:id", deleteProduct);

export default router;
