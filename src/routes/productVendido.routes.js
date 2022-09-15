import { Router } from "express";
import *as productVendidoCtrl from '../controllers/productoVendido.controller';
import { authJwt } from "../middlewares";

const router = Router();

router.post('/',[authJwt.verifyToken], productVendidoCtrl.createProductVendido);

router.get('/:userId',[authJwt.verifyToken], productVendidoCtrl.getProductVendido);

router.get('/:year/:userId',[authJwt.verifyToken], productVendidoCtrl.getProductVendidoByYear);

router.put('/:productVendido',[authJwt.verifyToken], productVendidoCtrl.updateProductoVendido);

export default router;