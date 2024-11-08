import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExists.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";

const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist ,isValidadPassword ,signIn)

export default routerAuth