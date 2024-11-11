


import express from 'express';
import { changePassword, login, register } from '../controller/userController.js';
import isAuth from '../middlwere/Auth.js';


const userRouter = express.Router();






userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.put('/changePassword',  isAuth , changePassword)

userRouter.get('/profile',  isAuth , async(req, res) => {
 
    const user   =   await req.user;
  

    res.status(200).json({ 
        success: true,
        data : user,
        massage : "User profile"
     });


})



//  logo out



export default userRouter;