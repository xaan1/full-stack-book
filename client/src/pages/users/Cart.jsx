

import { CartContext } from '@/contex/cart/ShopContex'
import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'

const Cart = () => {

    const {products , addToCart , removeFromCart ,updateProdductQuantity , total} = useContext(CartContext)




    console.log(products, "state Cart waaaaye")



    const removeFromCartwaaye = (id) => {
      // alert("Are you sure you want to delete this product?")
      removeFromCart(id)
    }



    const navigate  = useNavigate()



    const handlStripSession = async() => {
   
      try {

        const {data} = await axios.post('http://localhost:3000/api/cart/checkout', {products , total} , {
          headers: {
            'Content-Type': 'application/json',
           
          }
          })

          console.log(data.url, "data url")


          if (data.url) {
            window.location.href = data.url; // Use this to redirect to the checkout page
          }
      

        console.log(data)
      }catch (error) {
        console.log(error)
    }

  }
  
    return (
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          {products
.length === 0 ? (
            <p className="text-gray-500">No products in the cart.</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="flex items-center gap-4 mb-6 border-b pb-4">
                {/* {console.log(product._id ,"product._idproduct._id")} */}
                <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p>{product.subtitle}</p>
                  <p className="text-gray-500">{product.description}</p>
                  <p className="text-green-600 font-bold">${product.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                   
                 <input 	defaultValue={product.quantity}
											min={1}
											type="number"   onChange={(e) => updateProdductQuantity(product , e.target.value)} className="border p-1 w-16" />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCartwaaye(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          )}
          <div className="text-xl font-semibold mt-4 flex items-center justify-between">
            Total: {total}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handlStripSession}>Checkout</button>
            </div>


          <div className='mt-3'>
        
          </div>

          
        </div>
      );
}

export default Cart