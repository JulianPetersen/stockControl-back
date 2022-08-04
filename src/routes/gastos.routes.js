import { Router } from "express";
import *as gastoCtrl from '../controllers/gastos.controller';
import { authJwt } from "../middlewares";


const router = Router();

router.post('/',[authJwt.verifyToken], gastoCtrl.createGasto);

router.get('/',[authJwt.verifyToken], gastoCtrl.getGastos);

router.get('/:gastoId', gastoCtrl.getGastoById)

router.put('/:gastoId',authJwt.verifyToken ,gastoCtrl.updateGasto)

router.delete('/:gastoId',authJwt.verifyToken ,gastoCtrl.deleteGasto)

router.get('/getByFecha/:fecha', authJwt.verifyToken, gastoCtrl.getByDate)

export default router;