
// App.jsx  (React)

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
import User_Dashboard from './components/User/User_Dashboard'
import Search_Available_Turf from './components/User/Search_Available_Turf'
import Selected_Slote from './components/User/Selected_Slote'




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
      element : <><User_Dashboard /></>
    },
    {
      path : "/user/search-available-turf",
      element : <><Search_Available_Turf /></>
    },
    {
      path : "/user/search-available-turf/selected-available-slote/:sloteid/turfid/:turfid",
      element : <><Selected_Slote /></>
    },
    {
      path : "/success-booking",
      element : <></>
    },

    
  ])  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App




