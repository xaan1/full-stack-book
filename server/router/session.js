
import express from "express";
import { hadlecheckoout } from "../controller/stripe.js";
import isAuth from "../middlwere/Auth.js";


const sessionRouter = express.Router();




sessionRouter.post('/checkout',   hadlecheckoout)


export default sessionRouter;