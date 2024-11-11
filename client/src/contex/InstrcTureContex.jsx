
import { BookVedicData, LandinPageFormData  } from '@/config';

import React, { useContext, useState } from 'react'



export const InstrucTureContext = React.createContext()





const InstrcTureProvider = ({children}) => {






    const [landingPage, setLandingPage] =  useState (LandinPageFormData)

    const [courseCurriculumData, setCourseCurriculumData] = useState(BookVedicData)

    const [currentEdit, setCurrentEdit] = useState(null)

    const [medieuploadProgress, setMedieuploadProgress] = useState(false)
    const [mediaUploadPrecented , setMediaUploadPrecented] = useState(0)


    


  return (
    <InstrucTureContext.Provider value={{landingPage, setLandingPage, courseCurriculumData, setCourseCurriculumData

    , currentEdit, setCurrentEdit,
    medieuploadProgress, setMedieuploadProgress, mediaUploadPrecented, setMediaUploadPrecented
 
    }}>
      {children}
    </InstrucTureContext.Provider>
  )
}

export default InstrcTureProvider