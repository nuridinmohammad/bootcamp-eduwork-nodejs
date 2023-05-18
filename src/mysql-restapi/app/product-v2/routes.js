import express from "express";
import { destroyProductById, getAllProduct, getProductById, postProduct, updateProductById } from "./controller.js";

const router = express()

router.get('/products', getAllProduct);
router.get('/product/:id', getProductById);
router.post('/product', postProduct);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', destroyProductById);

export default router