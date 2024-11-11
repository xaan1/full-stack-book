

import express from 'express';

import mongoose from "mongoose";
import userRouter from './router/userRouter.js';
import uploadRouter from './router/uploadfile.js';
import cors from 'cors';
import router from './router/bookrouter.js';
import sessionRouter from './router/session.js';
import webhook from './router/webhook.js';

import stripeLib from 'stripe';
import bodyParser from 'body-parser';
import { webhookStripe } from './controller/webhoook.js';



const stripe = stripeLib('sk_test_51QJFwCAHpl5HUTYfVeuPWRatBa2HsuCeaoCqiax2S2Zo41vdYQIXZ3cUTbyWfyqpYY2wXDar7qw6PHq4ZtK4cVYZ00Gk8xxG7e');
const app = express();


app.post('/api/stripe/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
    console.log('Webhook received:------------------------------------', req.body);
  
    res.status(200).send('Webhook received');
  });
  



// stripe listen --forward-to localhost:3000/api/stripe/webhook
// whsec_899e91b03736a569a59c3664c843604d8fe1c97cb351a142f0a1a7cc9b144bff
app.use(cors());


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World');
})




// Connect to MongoDB
mongoose.connect("mongodb+srv://aasiyomaxmedapdi:YzibXb04qMIrht8P@cluster0.wm2cb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err);
    })








    app.use('/api/users', userRouter);

    // file Upload
    app.use('/api/upload', uploadRouter);

    app.use('/api/cart', sessionRouter);

    app.use('/api/Book', router);


    // sessuiom





app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

