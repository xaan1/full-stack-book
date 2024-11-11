
import { CategoryBook } from '@/config'
import { AllBookFromServicess } from '@/services'
import React, { useEffect, useState } from 'react'

import {motion} from 'framer-motion'
import { useNavigate } from 'react-router'

const HomPage = () => {
  const [allbook  , setAllbook] = useState("")
  async function getallbook() {

    const data = await AllBookFromServicess()

    setAllbook(data.data)
 
    
  }


  console.log(allbook , "allbook")


  useEffect(() => {
    getallbook()
  }, [])

  const navigate=  useNavigate()


  const handleNavigateToCoursesPage = (id) => {
   navigate(`/books/movie-details/${id}`);
  }

  return (
    <div className='min-h-screen bg-white'>
    
     <section className='flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-4'>

      <div className='lg:w-1/2 lg:pr-12'>

      <h1 className=' text-4xl  font-semibold text-gray-800'>Welcome to Book Store</h1>
      <p className='text-gray-600'>We have a wide range of books for you to choose from.</p>
      </div>


      <div className='lg:w-full mb-8  lg:mb-0'>
      <img width={600} height={600}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXell2mkXjbyfC_jUWsDlKljx82UQBgkAug&s' alt='books' className='w-full h-full rounded-lg shadow-lg' />
      </div>

     </section>



     {/*  categories */}


  <section className='py-4 px-5 bg-gray-200 lg:px-4'>

    <h1 className='text-2xl font-sm  mb-3 '>Categories</h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>



{CategoryBook.map((categoryItem) => (
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: 1  , transition: { duration: 0.5 } }}

              className="justify-start text-1xl bg-white p-2 mt-1"
              variant="outline"
              key={categoryItem.id}
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label.toUpperCase()}
            </motion.button>
          ))}

  </div>

    

  </section>







  {/*  courses */}




  <section className='py-12 px-4 lg:px-8'>

    <h1 className='text-2xl font-sm  mb-3 '>Books</h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>


      {
        allbook  && allbook.length > 0  ?
        allbook.map((item,index) => (
          <motion.div 
          onClick={() => handleNavigateToCoursesPage(item._id)}
          
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: 1  , transition: { duration: 0.5 } }}
          whileFocus={{ scale: 1.05 }}

          key={index} className='bg-white rounded-lg shadow-lg p-4'>
            <img src={item.image} alt='books' className='w-full h-48 object-cover rounded-lg' />
            <h1 className='text-lg font-semibold mt-4'>{item.title}</h1>
            <p className='text-gray-600'>{item.description}</p>
            <p className='text-gray-600'> ${item.price}</p>
          </motion.div>
        ))
        : <p>No Books Found</p>
      }

    </div>
  </section>



    </div>
  )
}

export default HomPage