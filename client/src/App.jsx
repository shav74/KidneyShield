import React, { useEffect, useState } from "react"

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
import Myaccount from "./pages/Myaccount.jsx"
import Transplantations from "./pages/Transplantations.jsx"
import Product from "./pages/Product.jsx"
import Article from "./pages/Article.jsx"
import Help from "./pages/Help.jsx"

let isHomeScreen = true

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/profile",
    element: <Myaccount />,
  },
  {
    path: "/transplantations",
    element: <Transplantations />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/articles/:articleId",
    element: <Article />,
  },
  {
    path: "/help",
    element: <Help />,
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
