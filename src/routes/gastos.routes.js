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

router.get('/getByMonth/:month', authJwt.verifyToken, gastoCtrl.getByMonth)

router.get('/getByYear/:year', authJwt.verifyToken, gastoCtrl.getByYear)

export default router;