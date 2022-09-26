import { Router } from "express";
import *as turnoCompletoCtrl from '../controllers/turnoCompleto.controller';
import { authJwt } from "../middlewares";



const router = Router();

router.post('/',[authJwt.verifyToken], turnoCompletoCtrl.createTurnoCompleto);

router.get('/:userId',[authJwt.verifyToken], turnoCompletoCtrl.getTurnosCompleto);

router.get('/getTurnobydate/:userId/:fecha', [authJwt.verifyToken], turnoCompletoCtrl.getTurnosCompletoByDate)

router.put('/:turnoId',authJwt.verifyToken , turnoCompletoCtrl.updateTurnoCompleto)

router.delete('/:turnoId',authJwt.verifyToken ,turnoCompletoCtrl.deleteTurnoCompleto)


export default router; 