
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import Auth from './pages/auth/Auth'
import { AuthContext } from './contex/authContex'
import ProtectedRoute from './components/ProtectedRoute'
import HomPage from './pages/users/HomPage'
import InstruTurPage from './pages/instructor/InstruTurPage'
import AddBook from './pages/instructor/AddBook'
import CommonLayoutuser from './components/CommonLayoutuser'
import Books from './pages/users/Books'
import MoviDetail from './pages/users/MoviDetail'
import Cart from './pages/users/Cart'

const App = () => {

  const {  user , setUser } = useContext(AuthContext)
  console.log(user?.user?.data?.role
    , "from App waaaye")

    console.log(user.authenticate, "location.authenticated");
  return (
   

    <Routes>
    

      <Route
        path="/auth"
        element={
          <ProtectedRoute
            element={<Auth />}
            authenticated={user.authenticate}
            user={user?.user?.data}
          />
        }
      /> 




      {/* instructor pages */}

      <Route
        path="/instructor"
        element={
          <ProtectedRoute
            element={<InstruTurPage />}
            authenticated={user.authenticate}
            user={user?.user?.data}
          />
        }
      /> 

<Route
        path="/instructor/add-book"
        element={
          <ProtectedRoute
            element={<AddBook />}
            authenticated={user.authenticate}
            user={user?.user?.data}
          />
        }
      /> 

<Route
        path="/instructor/edit-book/:id"
        element={
          <ProtectedRoute
            element={<AddBook />}
            authenticated={user.authenticate}
            user={user?.user?.data}
          />
        }
      /> 


      

      instructor

      
      {/* instructor pages */}




      <Route

path="/"
element={
  <ProtectedRoute
  element={<CommonLayoutuser />}
  authenticated={user.authenticate}
  user={user?.user?.data}
  />
}

>


<Route path="/home" element={
   <ProtectedRoute
   element={<HomPage />}
   authenticated={user.authenticate}
   user={user?.user?.data}
 />
}
/>
<Route path="/books" element={
   <ProtectedRoute
   element={<Books />}
   authenticated={user.authenticate}
   user={user?.user?.data}
 />
}
/>
<Route path="/" element={
   <ProtectedRoute
   element={<HomPage />}
   authenticated={user.authenticate}
   user={user?.user?.data}
 />
}
/>

<Route path="/books/movie-details/:id" element={
   <ProtectedRoute
   element={<MoviDetail />}
   authenticated={user.authenticate}
   user={user?.user?.data}
 />
}
/>

<Route path="/cart" element={
   <ProtectedRoute
   element={<Cart />}
   authenticated={user.authenticate}
   user={user?.user?.data}
 />
}
/>






</Route>







  
    </Routes>
  )
}

export default App