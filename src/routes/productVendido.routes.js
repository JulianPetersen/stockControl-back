import { Router } from "express";
import *as productVendidoCtrl from '../controllers/productoVendido.controller';
import { authJwt } from "../middlewares";

const router = Router();

router.post('/',[authJwt.verifyToken], productVendidoCtrl.createProductVendido);

router.get('/',[authJwt.verifyToken], productVendidoCtrl.getProductVendido);


export default router;