import React, { useEffect } from "react"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound.jsx"
import Articles from "./pages/Articles.jsx"

let isHomeScreen = true

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
])

const App = () => {
  console.log(isHomeScreen)
  useEffect(() => {
    isHomeScreen = window.location.pathname === "/"
  }, [])

  return (
    <div>
      <Navbar isHomeScreen={isHomeScreen} />
      <RouterProvider router={router} />
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}

export default App
