import BookModel from "../models/BookModel.js";

import stripe from "../helper/stripp.js";

export const hadlecheckoout = async (req, res) => {
 

    try {

   

        const {products , total} = req.body;

        // console.log(products, "total")
        const line_items =  await Promise.all(products.map(async (product) => {


            //  const check proudct in database

              const exisproduct = await BookModel.findById(product._id)

            //   console.log(exisproduct, "product")

                if(!exisproduct) {
                    return res.status(404).json({message: "Product not found"})
                }


            const item = {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.title,
                        images: [product.image[0]],
                    },
                    unit_amount: total * 100,
                },
                quantity: product.quantity,
            };
            return item;
        }))



        // console.log(line_items, "line_items")




        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url:`http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cancel`,
            metadata : {
                title: products.title,
                price: products.price,
                quantity: products.quantity,
                instructor: products.instructTurName,
                category: products.category
              },

            customer_email: req.email
        })



        res.status(200).send(session)


        console.log(line_items, "line_items")
    }  catch (error) {
        console.log(error)
    }
}