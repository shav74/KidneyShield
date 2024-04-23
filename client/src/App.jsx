import React, { useEffect } from "react"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound.jsx"
import Articles from "./pages/Articles.jsx"
import ArticlePage from "./pages/Article.jsx"
import Predictions from "./pages/Predictions.jsx"
import CKDSurvey from "./pages/CKDSurvey.jsx"
import LoginSignup from "./pages/LoginSignup.jsx"

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
  {
    path: "/view",
    element: <ArticlePage />,
  },
  {
    path: "/predictions",
    element: <Predictions />,
  },
  {
    path: "/ckdsurvey",
    element: <CKDSurvey />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
])

const App = () => {
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
