
import { BarChart, Book, Settings } from 'lucide-react'
import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Dashboard from '@/components/instructor/Dashboard'
import Books from '@/components/instructor/Books'
import Setting from '@/components/instructor/Setting'
import toast from 'react-hot-toast'

const menuItem = [
  {
    label: 'Dashboard',
    value : 'dashboard',
    icon : BarChart,
    component : <Dashboard />
  },


  {
    label: 'Books',
    value : 'books',
    icon : Book,
    component : <Books />
  },

  {
    label: 'Setting',
    value : 'setting',
    icon : Settings,
    component : <Setting />
  },



  
  {
    label: 'Logout',
    value : 'logout',
    icon : Book,
    component : ""
  },

]



const handlelogout = ()=>{
  
 sessionStorage.removeItem('token')
  toast.success('Logout successfully')
  window.location.href = '/auth'
  
}

const InstruTurPage = () => {

  const [activeTab, setActiveTab] = React.useState('dashboard')

  
  return (
    <div
    
    className='flex h-full min-h-screen  bg-gray-100'
    
    >
{/* asside */}


<aside className="w-64 bg-white hidden shadow-md md:block">

  <div className='p-4'>
    <h1 className='text-2xl font-bold'>Instructor</h1>


    <div className='mt-4'>

      {
        menuItem.map((item, index) => (
          <button
          
          value={item.value}
          onClick={() => item.value === "logout"  ? handlelogout()  : setActiveTab(item.value)}
          key={index} className='flex items-center justify-start space-x-4 p-2 hover:bg-gray-200 cursor-pointer w-full'>
            <item.icon size={24} />
            <span>{item.label}</span>
          </button>
        ))
      }
    </div>
  </div>
</aside>





{/* main content */}


<main className='flex-1 p-4'>



  

  <Tabs

  defaultValue='dashboard'
  value={activeTab}
  onValueChange={(value) => setActiveTab(value)}
  
  >

      
{
        menuItem.map((item,index) => (
          <TabsContent key={index} value={item.value}>
            {item.component !== null ? item.component : null}
          </TabsContent>
        ))
     }


  </Tabs>


</main>



    </div>
  )
}

export default InstruTurPage