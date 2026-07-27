import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import Header from './Header'
const Body = () => {
    const approuter=createBrowserRouter(
    [    {path:"/header", element:<Header/>},
        {path:"/",element:<Login/>},
        {path:"/browse",element:<Browse/>}
    ])
  return (
    <div>
      <RouterProvider router ={approuter}/>
    </div>
  )
}

export default Body
