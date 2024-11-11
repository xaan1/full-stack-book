import stripe from "../helper/stripp.js";


export const webhookStripe = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    console.log("Webhook received:", sig);
    console.log("Webhook received:               Webhook received:----------------------------", req.body);
  
    if (!sig) {
      return res.status(400).send('Missing Stripe Signature');
    }
  
    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        ' whsec_899e91b03736a569a59c3664c843604d8fe1c97cb351a142f0a1a7cc9b144bff'
      );
  
      console.log("Event type:", event.type);

    //   >stripe listen --forward-to http://localhost:3000/server
  
      switch (event.type) {
        case 'checkout.session.completed':
          const session = event.data.object;
          console.log("Checkout session completed:", session);
          break;
  
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }
  
      res.json({ received: true });
    } catch (error) {
      console.error("Error verifying webhook:", error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  };
  

