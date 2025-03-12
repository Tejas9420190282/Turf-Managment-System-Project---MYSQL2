import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {

  const router = createBrowserRouter([
    {
      path : "/signin",
      element : <><SignUp /></>
    },

  ])  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
