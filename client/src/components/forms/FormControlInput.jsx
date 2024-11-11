import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { fileUpload } from '@/services';
import { motion } from 'framer-motion';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const FormControlInput = ({
    FormControl  = []  , formData , setFormData  ,hasFileInput
}) => {




 
  const [thumbnailURL, setThumbnailURL] = useState("");

  function renderComponentByType(controleItem){
    console.log(controleItem.name)


    const handlechange = async (e) => {
      const file = e.target.files[0];
      console.log(file, "file");
    
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const data = await fileUpload(formData);
          console.log(data.success, "data");
          console.log(data.data.url, "data");
    
          if (data?.success) {
            const imageUrl = data?.data?.url;
            
            // Cusbooneysii formData-ka guud iyo state-ka thumbnail
            setFormData({
              ...formData,
              [e.target.name]: imageUrl
            });
            
            // Cusbooneysii thumbnail URL
            setThumbnailURL(imageUrl);
          }
    
        } catch (error) {
          console.log(error);
        }
      }
    }
    


    
    let element = null;

    const value = formData[controleItem?.name] || "";

    console.log(value ,"value")



    switch (controleItem.type) {
      case 'input':
        element = (
          <Input
          type={controleItem.type}
            id={controleItem.name}
            name={controleItem.name}
            value={value}
          
            
            onChange={(event) =>
              setFormData({
                ...formData,
                [controleItem.name]: event.target.value,
              })
            }
          />
        )
        break;
        case 'file':
          if (hasFileInput) {
            element = (
              <input
                type="file"
                id={controleItem.name}
              
                name={controleItem.name}
                className='border border-gray-300 p-2 rounded-md w-full'
                onChange={handlechange}
               
              />
            );
          }

          
          break;


        case  "textarea":


        element = (
          <Textarea
            id={controleItem.name}
            name={controleItem.name}
   
            type={controleItem.type}
            value={value}
          
            
            onChange={(event) =>
              setFormData({
                ...formData,
                [controleItem.name]: event.target.value,
              })
            }
          />
        )


        break;
        case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [controleItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controleItem.label} />
            </SelectTrigger>
            <SelectContent>
              {controleItem.options && controleItem.options.length > 0
                ? controleItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break


        default:
          element = (
            <Input
            id={controleItem.name}
            type={controleItem.type}
            name={controleItem.name}
            value={value}
          
            
            onChange={(event) =>
              setFormData({
                ...formData,
                [controleItem.name]: event.target.value,
              })
            }
            />
          );
          break;



    }



    return element;

  }



  return (
    <div

    className='flex flex-col space-y-2'
    >


        
             

{FormControl.map((controleItem) => (
  <div key={controleItem?.label}>
    <Label className ="text-2xl mb-2" htmlFor={controleItem.label}>{controleItem.label}</Label>
    {renderComponentByType(controleItem)}
  </div>
))}

           {/* Halkan ka muuji thumbnail-ka haddii la doortay */}
      {thumbnailURL && (
        <motion.div
        
       
        initial={{ opacity: 2 }}
        animate={{ opacity: 7 }}
        transition={{ duration: 1  , type : "spring" , stiffness : 100}}
        whileHover={{ scale: 1.3 }}


        
        
        className='mt-4 flex items-center justify-center flex-col'>
          <Label className="text-xl mb-2">Selected Thumbnail</Label>
          <img     src={thumbnailURL} alt="User Thumbnail" className='w-32 h-32 rounded-full object-cover' 
          
          />
        </motion.div>
      )}   



    </div>
  )
}

export default FormControlInput