

import multer from 'multer';

import path from 'path';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Temporary folder for files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
    }
  });
  
  // Set up Multer for handling file uploads
  export const upload = multer({ storage: storage });




