import { Router } from "express";
import * as userCtrl from '../controllers/user.controller'
import{authJwt, verifySignup} from '../middlewares'


const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin,verifySignup.checkRoleExisted] ,userCtrl.createUser )

router.get('/subuser/:id',[authJwt.verifyToken, authJwt.isAdmin], userCtrl.getSubUsers)
export default router;