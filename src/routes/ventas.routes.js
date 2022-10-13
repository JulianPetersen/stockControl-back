import { Router } from "express";
import *as ventaCtrl from '../controllers/ventas.controller';
import { authJwt } from "../middlewares";


const router = Router();

router.post('/',[authJwt.verifyToken,authJwt.isAdmin,authJwt.isModerator], ventaCtrl.createVenta);

router.get('/:userId',[authJwt.verifyToken,authJwt.isModerator], ventaCtrl.getVentas);

router.get('/:ventaId', [authJwt.verifyToken,authJwt.isModerator],ventaCtrl.getVentaById)

router.put('/:ventaId',[authJwt.verifyToken,authJwt.isModerator],ventaCtrl.updateVenta)

router.delete('/:ventaId',[authJwt.verifyToken,authJwt.isModerator],ventaCtrl.deleteVenta)

router.get('/getByFecha/:fecha/:userId', [authJwt.verifyToken,authJwt.isModerator],ventaCtrl.getByDate)

router.get('/getByMonth/:month/:userId', [authJwt.verifyToken,authJwt.isModerator],ventaCtrl.getByMonth)

router.get('/getByYear/:year/:userId', [authJwt.verifyToken,authJwt.isModerator], ventaCtrl.getByYear)


export default router;