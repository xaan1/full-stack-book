import User from "../models/userModel.js";


import bcrypt from  "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    

    try {
        const { name, email, password, role, thumbnail } = req.body;


        const existingUser = await User.findOne({email})

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }



        const salt = await bcrypt.genSalt(10);


        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            role,
            thumbnail
        });

      
        res.status(201).json({ 
            success: true,
            data : user,
            massage : "User created successfully"
            
         });
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
}




export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email})


        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }


        const isPasswordCorrect = await bcrypt.compare(password, user.password);


        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }


        const  token = jwt.sign({ email: user.email , id: user._id   , password : user.password , name : user.name, role : user.role} , "test", { expiresIn: "1h" });


        res.status(200).json({ 
            success: true,
            data : user,
            token
         });




    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



//  change password



export const changePassword = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;

        console.log(email , password , newPassword)

    
        const user  = req.user
        console.log(user)


    

     



        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }


        const salt = await bcrypt.genSalt(10);


        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await User.findOneAndUpdate({ email }, { password: hashedPassword });
        res.status(200).json({ message: "Password updated successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}