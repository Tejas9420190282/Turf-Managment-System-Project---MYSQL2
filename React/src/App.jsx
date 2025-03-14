
// App.jsx 

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AdminDashboard from './components/Admin/AdminDashboard'
import Add_Turf from './components/Admin/Add_Turf'
import Turf_Result from './components/Admin/Turf_Result'
import ViewAllTurfList from './components/Admin/View_All_Turf_List'



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
    {
      path : "/admin/add-turn",
      element : <><Add_Turf /></>
    },
    {
      path : "/admin/add-turn/add-turf-submit/turf-result",
      element : <><Turf_Result /></>
    },
    {
      path : "/admin/add-turn/add-turf-submit/turf-result",
      element : <><Turf_Result /></>
    },
    {
      path : "/admin/view-all-turf",
      element : <><ViewAllTurfList /></>
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
