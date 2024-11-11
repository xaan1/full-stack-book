
import express from "express";
import { webhookStripe } from "../controller/webhoook.js";


const webhook = express.Router();




webhook.post('/api/stripe',   webhookStripe)




export default webhook;