import { Router } from "express";
const router = Router();
import *as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRoleExisted] ,authCtrl.signUp)

router.post('/signup/singupsubuser/', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRoleExisted] ,authCtrl.signUpSubUser)

router.post('/signin', authCtrl.signin)

router.put('/updateuser/:userId', authCtrl.updateuser)

router.get('/getuser/:userId', authCtrl.getUserById)

export default router;