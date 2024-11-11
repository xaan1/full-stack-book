
import React, { useContext, useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useNavigate } from 'react-router'
import { AllBookFromServicess, DeleteBookFromServicess } from '@/services'
import { Delete, Edit } from 'lucide-react'
import { InstrucTureContext } from '@/contex/InstrcTureContex'
import toast from 'react-hot-toast'

const Books = () => {




  
  const [allbook  , setAllbook] = useState("")


  async function getallbook() {

    const data = await AllBookFromServicess()

    setAllbook(data.data)
 
    
  }



  useEffect(() => {
    getallbook()
  }, [])


 

  console.log(allbook)


  const naviggate = useNavigate()


  const {currentEdit, setCurrentEdit} = useContext(InstrucTureContext)



  const DeleCourse =async (id) => {


    const data = await DeleteBookFromServicess(id)

   console.log(data)
  
   if(data.success){
    toast.success("Book Deleted")
    window.location.reload()

   }
 
  }


  return (
    <div
    
    className='container mx-auto px-4 py-4'
    
    >

  <Card>
    <CardHeader
      className='flex justify-between items-center flex-row'
    >
      <CardTitle>Books</CardTitle>

      <button 
      onClick={() => {
        setCurrentEdit(null),
     
        
        naviggate('/instructor/add-book')}

      }
     

      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      
      >Add Book</button>
    </CardHeader>


    <CardContent>
    <Table>

  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Desorption</TableHead>
      <TableHead>Price</TableHead>
      <TableHead className="text-right">Author</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {
      allbook  && allbook.length > 0  ?
      allbook.map((item,index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{item.title}</TableCell>
          <TableCell>{item.description
          }</TableCell>
          <TableCell>{item.price
          }</TableCell>
          <TableCell className="text-right">{item.instructTurName

          }</TableCell>
          <TableCell className="text-right">
            <button

            onClick ={() => {
              setCurrentEdit(item?._id)
        
              naviggate('/instructor/edit-book/'+item?._id)

            }}
            
         >
              <Edit size={20} />
            </button>
            <button variant= "ghost" >
              <Delete size={20} 
                onClick ={() =>  DeleCourse(item?._id)}
              
              />
            </button>
  
            </TableCell>
        </TableRow>
      ))  : null
    }
  </TableBody>
</Table>
    </CardContent>
  </Card>

      
    
     
      
      </div>
  )
}

export default Books