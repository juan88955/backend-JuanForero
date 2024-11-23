import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExists.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signout from "../controllers/auth/signout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";

const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist, isValidadPassword, generateToken, signIn)
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signout)

//ruta para google
routerAuth.get(
    '/signin/google', passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)

routerAuth.get(
    '/signin/google/callback', passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signIn
)

export default routerAuth