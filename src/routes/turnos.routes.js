import { Router } from "express";
import *as turnoCtrl from '../controllers/turnos.controller';
import { authJwt } from "../middlewares";


const router = Router();

router.post('/',[authJwt.verifyToken], turnoCtrl.createTurno);

router.get('/:userId',[authJwt.verifyToken], turnoCtrl.getTurnos);

router.get('/getfechabydate/:userId/:fecha', [authJwt.verifyToken], turnoCtrl.getTurnosByDate)

router.put('/:turnoId',authJwt.verifyToken , turnoCtrl.updateTurno)

router.delete('/:turnoId',authJwt.verifyToken ,turnoCtrl.deleteTurno)


export default router; 