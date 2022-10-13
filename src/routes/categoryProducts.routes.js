import { Router } from "express";
import *as categoriesProduct from '../controllers/categoryProduct.controller';
import { authJwt } from "../middlewares";


const router = Router();

router.post('/',[authJwt.verifyToken, authJwt.isAdmin], categoriesProduct.createCategory);

router.get('/:userId',[authJwt.verifyToken,authJwt.isAdmin], categoriesProduct.getCategories);

export default router;