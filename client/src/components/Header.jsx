
import { CartContext } from '@/contex/cart/ShopContex'
import { Book } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const {products , addToCart , removeFromCart ,updateProdductQuantity , total} = useContext(CartContext)
  return (
    <div
    
    className='flex justify-between items-center p-4 border-b relative'>



        <div className='flex items-center space-x-4'>
          <Link to="/" className='flex items-center space-x-4'>
          <h1 className='text-2xl'>Book Store</h1>
          <Book className='w-7 h-7' />
          </Link>
         
        </div>



    
      <ul
      className='flex gap-x-2 space-x-3'
      
      >

    


<Link

className='text-2xl font-semibold hover:opacity-5'

to="/books" 

>Books</Link>



        <Link
            className='text-2xl font-semibold hover:opacity-5'
         to="/" >Contact</Link>
        <Link to="/"     className='text-2xl font-semibold hover:opacity-5'>About</Link>

          <Link to="/cart"     className='text-2xl font-semibold hover:opacity-5 relative'>
          cart
          
          <span
          className=' bg-red-500 text-white rounded-full w-7 h-7 flex justify-center items-center absolute top-6 right-0'

          
          
          >
          {products.length}
          </span>
          </Link>

      </ul>
    
    

    </div>
  )
}

export default Header