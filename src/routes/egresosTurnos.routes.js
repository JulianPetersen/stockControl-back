import { Router } from "express";
import *as egresosTurnos from '../controllers/egresoTurnos.controller';
import { authJwt } from "../middlewares";



const router = Router();

router.post('/',[authJwt.verifyToken], egresosTurnos.createEgresoTurno);

router.get('/:userId',[authJwt.verifyToken], egresosTurnos.getEgresoTurno);

router.get('/getEgresobydate/:userId/:fecha', [authJwt.verifyToken], egresosTurnos.getEgresoTurnoByDate)

router.put('/:egresoId',authJwt.verifyToken , egresosTurnos.updateEgresoTurno)

router.delete('/:egresoId',authJwt.verifyToken ,egresosTurnos.deleteEgresoTurno)


export default router; 