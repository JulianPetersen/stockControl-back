import { Router } from "express";
import *as ventaCtrl from '../controllers/ventas.controller';
import { authJwt } from "../middlewares";


const router = Router();

router.post('/',[authJwt.verifyToken], ventaCtrl.createVenta);

router.get('/',[authJwt.verifyToken], ventaCtrl.getVentas);

router.get('/:ventaId', ventaCtrl.getVentaById)

router.put('/:ventaId',authJwt.verifyToken ,ventaCtrl.updateVenta)

router.delete('/:ventaId',authJwt.verifyToken ,ventaCtrl.deleteVenta)

router.get('/getByFecha/:fecha', authJwt.verifyToken, ventaCtrl.getByDate)

router.get('/getByMonth/:month', authJwt.verifyToken, ventaCtrl.getByMonth)

router.get('/getByYear/:year', authJwt.verifyToken, ventaCtrl.getByYear)


export default router;