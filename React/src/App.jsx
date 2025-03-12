
// App.jsx 

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AdminDashboard from '../../../Turf Managment System Project - sequelize/React/src/components/Admin/AdminDashboard'

function App() {

  const router = createBrowserRouter([
    {
      path : "/signup",
      element : <><SignUp /></>
    },
    {
      path : "/",
      element : <><Login /></>
    },
    
    // admin Section
    {
      path : "/admin",
      element : <><AdminDashboard /></>
    },



    // User Scetion
    {
      path : "/user",
      element : <></>
    }


  ])  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
