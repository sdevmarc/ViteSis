import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import Login from './views/Login/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path:'/login',
        element: <Login />
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
