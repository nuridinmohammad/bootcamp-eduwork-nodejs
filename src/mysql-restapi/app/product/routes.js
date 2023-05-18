import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

import { deleteProductById, getAllProduct, getProductById, postProduct, updateProductById} from "./controller.js";

const router = express();
const upload = multer({ dest: "assets" });

router.get("/products", getAllProduct);
router.get("/product/:id", getProductById);
router.post('/product', postProduct);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', deleteProductById);

export default router;
