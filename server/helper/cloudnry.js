
import cloudinary from "cloudinary"


cloudinary.config({
    cloud_name: "dqe1nqlaf",
    api_key: "346842573774783",
    api_secret: "m7cHsbMbZHF7KI8usgeXXYipoXM"
  });
  




  


//    file Upload


export const fileUpload = async (file) => {


    try {
        const res = await cloudinary.v2.uploader.upload(file, {
             resource_type: "auto"
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}











export default cloudinary;