
import React, { useContext } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FormControlInput from '@/components/forms/FormControlInput'
import { LandinPageFormControl } from '@/config'
import { InstrucTureContext } from '@/contex/InstrcTureContex'
const BookLandinpage = () => {

  const {landingPage, setLandingPage} = useContext(InstrucTureContext)
  // console.log(landingPage, "landingPage")
  return (
    <div 
    className='container mx-auto px-4 py-4'
    >

  <Card>
    <CardHeader
     
    >
      <CardTitle>BooksLandingPage</CardTitle>

      <CardContent>
        <FormControlInput FormControl={LandinPageFormControl} formData={landingPage}  setFormData={setLandingPage}/>
      </CardContent>

     
    </CardHeader>
  </Card>

    </div>
  )
}

export default BookLandinpage