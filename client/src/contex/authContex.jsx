import { SignInFromData, SignUpFromData } from "@/config";
import { LoginUser, ProfileUser, RegistarUser } from "@/services";
import { createContext, useEffect, useState  } from "react";


import { toast } from 'react-hot-toast';



export const AuthContext = createContext();




 const AuthProvider = ({children}) => {





    const [initialDataSingup , setInitialDataSingup] = useState(SignUpFromData)






    // console.log(initialDataSingup)

    const [singInData , setSingInData] = useState(SignInFromData)

    const [user , setUser] = useState(
        {
            authenticate : false,
            user : null
        }
    
    )


    console.log(user , "from AuthProvider")


    async function handleLogin() {

        try {
            const data = await LoginUser(singInData)
            console.log(data.token , "from AuthProvider")

            if(data?.success){
                sessionStorage.setItem("token" , JSON.stringify(data?.token))
                toast.success("User Login Successfully")
               setUser({
                     authenticate : true,
                     user : data
               })
            }

            
    
            
            
        } catch (error) {
            console.log(error.data , "from AuthProvider")
        }



    }






    async function Checkout(){
        try {
            const data = await ProfileUser()
            console.log(data , "from AuthProvider")
            if(data?.success){
                setUser({
                    authenticate : true,
                    user : data
                }) 
            } else {
                setUser({
                    authenticate : false,
                    user : null
                })
            }
        } catch (error) {
            console.log(error?.response?.data?.success, "error")
            if (!error?.response?.data?.success) {
                setUser({
                  authenticate: false,
                  user: null,
                });
            }
            
        }
       
}


useEffect(() => {
    Checkout()
},[])



    


    return (
        <AuthContext.Provider  value={{
            initialDataSingup,
            setInitialDataSingup,
            singInData , setSingInData,
            handleLogin,
            user , setUser
        
       
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider