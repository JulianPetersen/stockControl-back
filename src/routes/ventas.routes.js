import { Router } from "express";
import *as ventaCtrl from '../controllers/ventas.controller';
import { authJwt } from "../middlewares";


const router = Router();

router.post('/',[authJwt.verifyToken,authJwt.isAdmin,authJwt.isModerator], ventaCtrl.createVenta);

router.get('/:userId',[authJwt.verifyToken,authJwt.isAdmin], ventaCtrl.getVentas);

router.get('/:ventaId', [authJwt.verifyToken,authJwt.isAdmin],ventaCtrl.getVentaById)

router.put('/:ventaId',[authJwt.verifyToken,authJwt.isAdmin],ventaCtrl.updateVenta)

router.delete('/:ventaId',[authJwt.verifyToken,authJwt.isAdmin],ventaCtrl.deleteVenta)

router.get('/getByFecha/:fecha/:userId', [authJwt.verifyToken,authJwt.isAdmin],ventaCtrl.getByDate)

router.get('/getByMonth/:month/:userId', [authJwt.verifyToken,authJwt.isAdmin],ventaCtrl.getByMonth)

router.get('/getByYear/:year/:userId', authJwt.verifyToken, ventaCtrl.getByYear)


export default router;