
import React, { useContext } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InstrucTureContext } from '@/contex/InstrcTureContex'
import { Input } from '@/components/ui/input'
import { fileUpload } from '@/services'
import VideoPlyer from './VideoPlyer'
import ProgresPar from '@/components/ProgresPar'
const BookVideo = () => {

  const {courseCurriculumData, setCourseCurriculumData,medieuploadProgress, setMedieuploadProgress, mediaUploadPrecented, setMediaUploadPrecented} = useContext(InstrucTureContext)



  console.log(courseCurriculumData)
  const handleCourseTittlechange = (value, index) => {
 
    let cpy  =  [...courseCurriculumData]


    cpy[index] = {
      ...cpy[index],
      title : value
    }

    setCourseCurriculumData(cpy)


  }




  const handleNewLecture = () => {
    setCourseCurriculumData([...courseCurriculumData,
    {
      ...courseCurriculumData[0]
    }
   ])



  }




  async function handleSingleLectureUpload(event , index) {

    const file = event.target.files[0];
    console.log(file, "file");

    if(!file) return;
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        setMedieuploadProgress(true)
        const data = await fileUpload(formData , setMediaUploadPrecented);
 
        console.log(data);
  
        if (data?.success) {
          console.log(data.success, "success");
          console.log(data.data.
            url
            , "url xaan");
            setMedieuploadProgress(false)


            let cpy = [...courseCurriculumData]

            console.log(cpy, "cpy");

            cpy[index] = {
              ...cpy[index],
              videoUrl : data.data.url,
              publicId : data.data.public_id
            }


            setCourseCurriculumData(cpy)
            
       

      
          
          // Cusbooneysii formData-ka guud iyo state-ka thumbnail

          
          
         
        }
  
      } catch (error) {
        console.log(error);
      }
    }


    console.log(courseCurriculumData, "file");
   


  


    
  }

  console.log(courseCurriculumData, "bookvideo");
  return (
    <Card>

        <CardHeader>
            <CardTitle>Book Video</CardTitle>
        </CardHeader>

    {
      medieuploadProgress && (
        <ProgresPar iSmediaUploading={medieuploadProgress} progress={mediaUploadPrecented} />
      )
    }

        <CardContent>


          <button 

          onClick={handleNewLecture}

          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          
          >Add Lecture</button>


    {
        courseCurriculumData.map(( item, index) => {
          console.log(index ,"index")
            return (
              <>
             
                <div key={index} className="mb-4 flex gap-x-3 items-center">
                  <h1>lecture : {index + 1 }</h1>
                   <Input
                   onChange={(e) =>  handleCourseTittlechange(e.target.value , index)}
                   name= {`tittle - ${index + 1}`}

                   value={courseCurriculumData[index]?.title}
               
                   className ="max-w-96" type='text' placeholder='lecture title'  />


                </div>


                {
                  courseCurriculumData[index].videoUrl ? (
                    <VideoPlyer
                    url={courseCurriculumData[index].videoUrl}
                    width="450px"
                    height="200px" />
                  )  : (
                    <>
                                    
<Input
      type="file"
      accept="video/*"
      onChange={(event) =>
        handleSingleLectureUpload(event, index)
      }
      className="mb-4" />
                    </>
                  )
                }

       </>
                
            )
        })
    }
     
        </CardContent>


    </Card>
  )
}

export default BookVideo