import { Router } from "express";
import *as ingresoTurno from '../controllers/ingresosTurnos';
import { authJwt } from "../middlewares";



const router = Router();

router.post('/',[authJwt.verifyToken], ingresoTurno.createIngresosTurno);

router.get('/:userId',[authJwt.verifyToken], ingresoTurno.getIngreoTurno);

router.get('/getTurnobydate/:userId/:fecha', [authJwt.verifyToken], ingresoTurno.getIngresoTurnoByDate)

router.put('/:turnoId',authJwt.verifyToken , ingresoTurno.updateIgresoTurno)

router.delete('/:turnoId',authJwt.verifyToken ,ingresoTurno.deleteIngresoTurno)


export default router; 