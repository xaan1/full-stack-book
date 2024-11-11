
import React, { useContext, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { InstrucTureContext } from '@/contex/InstrcTureContex'
import { fileUpload } from '@/services'
import ProgresPar from '@/components/ProgresPar'



const Bannerbook = () => {

  const {landingPage, setLandingPage ,  medieuploadProgress, setMedieuploadProgress, mediaUploadPrecented, setMediaUploadPrecented
    } = useContext(InstrucTureContext)

  console.log(landingPage, "landingPage");
  const [thumbnailURL, setThumbnailURL] = useState(landingPage?.image || '');

  const handleImageUploadChange = async (e) => {
    const file = e.target.files[0];
    console.log(file, "file");
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        setMedieuploadProgress(true)
        const data = await fileUpload(formData , setMediaUploadPrecented);
        console.log(data.success, "data");
        console.log(data.data.url, "data");
  
        if (data?.success) {
          const imageUrl = data?.data?.url;
          setMedieuploadProgress(false);
          
          // Cusbooneysii formData-ka guud iyo state-ka thumbnail
          setLandingPage({
            ...landingPage,
            image: imageUrl,
          });
          
          // Cusbooneysii thumbnail URL
          setThumbnailURL(imageUrl);
 
        }
  
      } catch (error) {
        console.log(error);
      }
    }
  }

  console.log(mediaUploadPrecented, "mediaUploadPrecented");

  return (
    <Card className = "mt-2">

        <CardHeader>
            <CardTitle
            
            className='text-lg font-semibold text-gray-600'
            
            >Book Banner</CardTitle>
        </CardHeader>

        {medieuploadProgress ? (
        <ProgresPar iSmediaUploading={medieuploadProgress} progress={mediaUploadPrecented} />
      ) : null}

        <CardContent>
        {landingPage?.image ? (
            <img className='w-[600px]' src={landingPage.image ? landingPage.image : "no image"} />
          ) : (
            <div className="flex flex-col gap-3">
              <label>Upload Course Image</label>
              <Input
                onChange={handleImageUploadChange} // Handle image change
                type="file"
                accept="image/*"
              />
            
            </div>
          )}

            
         
           
        </CardContent>

    </Card>
  )
}

export default Bannerbook