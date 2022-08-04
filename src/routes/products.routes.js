import { Router } from "express";
import *as productsCtrl from '../controllers/products.controller';
import { authJwt } from "../middlewares";
import upload from '../middlewares/multer';

const router = Router();

router.post('/',[authJwt.verifyToken],upload.single('image'), productsCtrl.createProduct);

router.get('/',[authJwt.verifyToken], productsCtrl.getProducts);

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId',authJwt.verifyToken ,productsCtrl.updateProductById)

router.delete('/:productId',authJwt.verifyToken ,productsCtrl.deleteProductById)



export default router;