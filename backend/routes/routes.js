import express from 'express';
import { addProduct,getData,getSingleData } from '../controller/controller.js';

const router=express.Router();

router.post("/addProduct",addProduct);
router.get("/getData",getData)
router.get("/products/:id",getSingleData)

export default router;