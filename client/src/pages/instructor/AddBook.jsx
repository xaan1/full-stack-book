
import React, { useContext, useEffect } from 'react'


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import BookLandinpage from '@/components/instructor/newbook/BookLandinpage'
import Bannerbook from '@/components/instructor/newbook/Bannerbook'
import BookVideo from '@/components/instructor/newbook/BookVideo'
import { AuthContext } from '@/contex/authContex'
import { InstrucTureContext } from '@/contex/InstrcTureContex'
import { AddBookFromServicess, SingleBookFromServicess, UpdateBookFromServicess } from '@/services'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
const AddBook = () => {



  const {id} = useParams()


  const {landingPage, setLandingPage ,courseCurriculumData, setCourseCurriculumData,
    currentEdit, setCurrentEdit
  } = useContext(InstrucTureContext)



  async function getbook(){
    const data = await SingleBookFromServicess(id)
  
    if(data.success) {
      setCurrentEdit(data.data._id
      )
   
    }
    setCourseCurriculumData(currentEdit ? data.data.video  : null)
    setLandingPage(currentEdit ?data.data : "")
  }

  useEffect(() => {

    
    if(currentEdit)     getbook()

  },[id])


  useEffect(() => {

    if(id) setCurrentEdit(id)

  }, [id])

  const {  user

   
    } = useContext(AuthContext)




// console.log(auth.user  ,"hh")

const naviagte = useNavigate()

    const handlCreateBook = async() => {
       


      const formdata = {

        instructTurName : user.user.data.name,
        video  : courseCurriculumData,
        ...landingPage,
        date : new Date(),
        isPuplished : true

      }

      console.log(formdata ,"formdata AddBookFromServicess")


      const data = await     currentEdit == null  ? await  AddBookFromServicess(formdata) :  await  UpdateBookFromServicess(  currentEdit ,formdata)

      console.log(data ,"data AddBookFromServicess")

      if(data.success) {
        console.log(data.success ,"data AddBookFromServicess")

        if(currentEdit) {
          toast.success("Book Updated Successfully")
          naviagte('/instructor')
          setCourseCurriculumData([])
          setLandingPage("")
          setCurrentEdit(null)
          return
        }
        toast.success("Book Created Successfully")
        naviagte('/instructor')

      }

      
    }
  return (
    <div

    className='container mx-auto px-4 py-4'
    
    >

        <div className='flex justify-between items-center flex-row'>
            <h1
            className='text-2xl font-bold'

            
            > 
            
            {
              currentEdit ? "Edit Book" : "Add Book"
            }
            
      
            
            </h1>

            <button
            
            onClick={handlCreateBook}
            
            
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save</button>
        </div>

        <Card className= "mt-4">

            <CardContent>

             
<Tabs defaultValue='video' className='space-y-4'>
<TabsList className  = "mt-1" >
  <TabsTrigger 
  
  className='text-sm font-semibold text-gray-600'
  
  
  value='video' >video</TabsTrigger>
  <TabsTrigger   className='text-sm font-semibold text-gray-600' value='booklandinpage'>BookLandingPage</TabsTrigger>
  <TabsTrigger   className='text-sm font-semibold text-gray-600' value='setting'>Setting</TabsTrigger>
</TabsList>


<TabsContent value='video'>

   <BookVideo />
  
</TabsContent>


<TabsContent value='booklandinpage'>
  
  
  <BookLandinpage />
</TabsContent>


<TabsContent value='setting'>
    
    <Bannerbook   />
</TabsContent>
</Tabs>

            </CardContent>

        </Card>



    </div>
  )
}

export default AddBook