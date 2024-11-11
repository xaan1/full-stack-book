
import React from 'react'
import FormControlInput from './FormControlInput'
import { Input } from '../ui/input'

const CommonForm = ({FormControl  = []  , formData , setFormData , ButtonText , hanldesubmit ,hasFileInput = false}) => {
  return (
    <form className='space-y-5' onSubmit={hanldesubmit}>



        <FormControlInput  FormControl={FormControl}  formData ={formData}  setFormData ={setFormData} ButtonText ={ButtonText}   hasFileInput={hasFileInput}/>



     



  <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-md font-semibold text-2xl  hover:bg-blue-400'>
    {ButtonText }
  </button>

    </form>
  )
}

export default CommonForm