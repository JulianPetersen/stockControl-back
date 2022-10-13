import { Router } from "express";
import *as egresosTurnos from '../controllers/egresoTurnos.controller';
import { authJwt } from "../middlewares";



const router = Router();

router.post('/',[authJwt.verifyToken,authJwt.isAdmin], egresosTurnos.createEgresoTurno);

router.get('/:userId',[authJwt.verifyToken,authJwt.isAdmin], egresosTurnos.getEgresoTurno);

router.get('/getEgresobydate/:userId/:fecha', [authJwt.verifyToken,authJwt.isAdmin], egresosTurnos.getEgresoTurnoByDate)

router.put('/:egresoId',[authJwt.verifyToken,authJwt.isAdmin] , egresosTurnos.updateEgresoTurno)

router.delete('/:egresoId',[authJwt.verifyToken,authJwt.isAdmin] ,egresosTurnos.deleteEgresoTurno)


export default router; 