
import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

const CommonLayoutuser = () => {
  return (
    <div>
      
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default CommonLayoutuser