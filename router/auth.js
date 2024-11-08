import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExists.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";

const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist ,isValidadPassword, generateToken, signIn)

export default routerAuth