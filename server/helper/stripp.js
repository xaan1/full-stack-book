import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51QJFwCAHpl5HUTYfVeuPWRatBa2HsuCeaoCqiax2S2Zo41vdYQIXZ3cUTbyWfyqpYY2wXDar7qw6PHq4ZtK4cVYZ00Gk8xxG7e", {
  apiVersion: '2022-11-15',
});

export default stripe;
