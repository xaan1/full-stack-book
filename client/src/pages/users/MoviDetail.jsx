
import { SingleBookFromServicess } from '@/services'
import { CheckCircle, Globe } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoPlyer from '@/components/instructor/newbook/VideoPlyer';
import { Button } from '@/components/ui/button';
import { CartContext } from '@/contex/cart/ShopContex';
const MoviDetail = () => {

  const {id}  = useParams()


  const {products , addToCart} = useContext(CartContext)

  console.log(products, "state product ku jiea waaye")


  console.log(id)


  const [book, setBook] = React.useState(null)

  
  async function getbook(){
    const data = await SingleBookFromServicess(id)
  
     console.log(data)
     setBook(data.data)
    
  }


  console.log(book, "book")

  useEffect(() => {

    getbook()

  },[id])







  const getIndexOfFreePreviewUrl =
  book !== null
    ? book?.
    video?.findIndex(
        (item) => item
      )
    : -1;




    const handleAddToCart = () => {
     console.log(book, "book")
     addToCart(book)
    }

  return (
    <div

    className='container mx-auto  mt-5'
    
    >

<div className='bg-gray-900 text-white p-8 rounded-lg mt-3 mb-6'>
        
        <h1 className='text-2xl font-bold'>
           {
               book && book.title
           }
           </h1>


           <p className='text-sm mt-2'>
           {
               book && book.subtitle
           }
           </p>

           <div className='flex  items-center space-x-4  text-sm mt-4'>

               <span>Created bY  {book?.instructorName}</span>

                 <span>Created On  ___

                 {book?.date.split("T")[0]}
                   
                    </span>


                    <span className='flex items-center gap-2'>
                       <Globe  className='w-4 h-4' />
                       {
                           book && book.language
                       }
                    </span>

                    <span>
         
         </span>

           </div>
       </div>



       <div className='flex flex-col md:flex-row gap-4 mt-4'>


<main className='flex-grow'>

  <Card>

      <CardHeader>
          <CardTitle>Whet is Your Read in THIS bOOK</CardTitle>
      </CardHeader>


<CardContent>
 
<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {book?.objectives
                .split(",")
                .map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
            </ul>


</CardContent>


  </Card>


  <Card className='mt-4'>

  <CardHeader>
            <CardTitle>Book Description</CardTitle>
          </CardHeader>
          <CardContent>{book?.description}</CardContent>


  </Card>



<Card className="mb-8 mt-10">
      <CardHeader>
        <CardTitle>Book Vedioes</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {book?.video.map((lecture, index) => (
            <li 
            // onClick={() => handelSetPrivew(lecture)}
            // onClick={
            //   lecture?.freePreview
            //     ? () => handelSetPrivew(lecture)
            //     : null
            // }
            
            key={index}  className="flex items-center cursor-pointer">
             
              <div className="flex-1">
                <h1 className="text-lg font-bold">{lecture.tittle}</h1>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
</Card>



</main>


  <aside className='w-ful md:w-[500px]'>


  <Card className="sticky top-4">

  <CardContent className="p-6">

  <div className="aspect-video mb-4 rounded-lg flex items-center justify-center">
      <VideoPlyer 

      url={
          
          getIndexOfFreePreviewUrl  !== -1 ? book?.video[getIndexOfFreePreviewUrl].videoUrl : "https://www.youtube.com/watch?v=6v2L2UGZJAM"
    
      }
      
      width="450px"
      height="200px"

      />
     
  </div>
  <div className="mb-4">
              <span className="text-3xl font-bold text-black">
                ${book?.price}
              </span>
            </div>

            <Button

            onClick={handleAddToCart} 
            
            className="w-full">
              Add To carT
            </Button>
  </CardContent>
  </Card>



  </aside>


      </div>





    </div>
  )
}

export default MoviDetail