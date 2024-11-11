
import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader, "authHeader");


        if (!authHeader) {
            return res.status(401).json({
              success: false,
              message: "User is not authenticated",
            });
          }


        const token =  authHeader.split(" ")[1];
   
        console.log(token);


        if (!token) {
            return res.status(401).json({ message: "You are not authenticated" });
        }



        const decodedToken = jwt.verify(token, "test");

       


        req.user = decodedToken;
        
        next();
    }  catch (error) {
        console.log(error);
    }

}



export const isAdmin  = (req, res, next) => {


    try {
        
        if (req.user.role !== "instructor") {
            return res.status(403).json({ message: "You are not instructor" });
        }
        next();
    } catch (error) {
        console.log(error);
    }



}


export default isAuth;