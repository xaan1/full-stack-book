

import { Book } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AuthContext } from '@/contex/authContex'
import FormControlInput from '@/components/forms/FormControlInput'
import { SignInFormControl, SignUpFormControl } from '@/config'
import CommonForm from '@/components/forms/CommonForm'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RegistarUser } from '@/services';

const Auth = () => {


  const [activeTab, setActiveTab] = useState("login")

  const navigate    = useNavigate("login")


  const {  initialDataSingup,
    setInitialDataSingup,
    singInData , setSingInData,
    handleLogin
   
    } = useContext(AuthContext)

    console.log(initialDataSingup ,"initialDataSingup xaan")

  function handleChange(value){
    setActiveTab(value)
  }



  async function handleLoginWaaye(e) {
    e.preventDefault()
  
   handleLogin()
  }





  async function handleRegistar(e) {
    e.preventDefault()
    try {
        const data = await RegistarUser(initialDataSingup)
        console.log(data , "from AuthProvider")

        if(data?.success){
          toast.success("User Register Successfully")
          setInitialDataSingup({
            name : "",
            email : "",
            password : "",
            
          })

          // navigate("/login")
          setActiveTab("login")

        
        }
    } catch (error) {
        console.log(error.data , "from AuthProvider")
    }
}
  return (
    <div

    className='flex flex-col min-h-screen'
    >

      
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>

        <Link to='/' className='text-lg font-bold flex gap-x-2'>
        <Book size='24' className='inline-block mr-2' />
          <span
            className='text-blue-600'
          >BookStore</span>
        </Link>

      </header>





<div className='flex items-center justify-center min-h-screen'>




<Tabs value={activeTab} className="w-[400px]"
 defaultValue='Login'
onValueChange={handleChange}

>

  <TabsList className="grid grid-cols-2">
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>


  <TabsContent value="login">
  <Card>
  <CardHeader>
    <CardTitle
    
    className='text-2xl font-bold text-center'
    
    
    >
      Login to your Account
    </CardTitle>
  
  </CardHeader>
  <CardContent>
  <CommonForm  hanldesubmit={handleLoginWaaye}     FormControl={SignInFormControl} formData={singInData} setFormData={setSingInData} ButtonText = "SignIn" />
  </CardContent>
  
</Card>
  </TabsContent>

  <TabsContent value="register">
  <Card>
  <CardHeader>
    <CardTitle
    
    className='text-2xl font-bold text-center'
    
    
    >
      Create an Account
    </CardTitle>
  
  </CardHeader>
  <CardContent>
  <CommonForm hasFileInput={true} hanldesubmit={handleRegistar} FormControl={SignUpFormControl} formData={initialDataSingup} setFormData={setInitialDataSingup} ButtonText = "SignUp" />
  
  </CardContent>
  
</Card>

    
  
  </TabsContent>
</Tabs>

</div>

<Toaster />

    </div>
  )
}

export default Auth