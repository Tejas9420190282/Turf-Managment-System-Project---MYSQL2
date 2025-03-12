import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  const router = createBrowserRouter([
    {
      path : "/signup",
      element : <><SignUp /></>
    },
    {
      path : "/login",
      element : <><Login /></>
    },

  ])  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
