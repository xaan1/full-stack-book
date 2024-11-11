

import express from 'express';

import { fileUpload } from '../helper/cloudnry.js';
import { upload } from '../helper/multer.js';



const uploadRouter = express.Router();






uploadRouter.post('/upload',  upload.single("file") , async(req, res) => {
    try {
       

        
      

        


       
        console.log(req?.file?.path ,"hhh")


        const result = await await fileUpload(req.file.path);
        res.status(200).json({
          success: true,
          data: result,
        });
     

    } catch (error) {
        console.log(error);
      
  
        res.status(500).send('Something went wrong' , error);
    }
})




export default uploadRouter;