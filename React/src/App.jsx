
// App.jsx 

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AdminDashboard from './components/Admin/AdminDashboard'
import Add_Turf from './components/Admin/Add_Turf'
import Turf_Result from './components/Admin/Turf_Result'
import ViewAllTurfList from './components/Admin/View_All_Turf_List'
import FindTurfByArea from './components/Admin/Find_Turf_Using_Area'
import Final_Turf_Update from './components/Admin/Final_Turf_Update'
import Remove_Turf from './components/Admin/Remove_Turf'



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
    {
      path : "/admin/search-area-turf/:area",
      element : <><FindTurfByArea /></>
    },
    {
      path :"/admin/search-area-turf/:area/final-update-turf",
      element : <><Final_Turf_Update /></>
    },
    {
      path :"/admin/remove-turf",
      element : <><Remove_Turf /></>
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
