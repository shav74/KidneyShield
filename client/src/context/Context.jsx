import React, { createContext, useState, useEffect } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
  const { children } = props

  const [all_product, setAllProducts] = useState([])
  const [all_article, setAllArticles] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/waitlist")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setAllProducts(data)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchProducts()

    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:4000/articles")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const articleData = await response.json()
        setAllArticles(articleData)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchProducts()
  }, [])

  const changepass = (oldpassword, newpassword, email) => {
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/changepass", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldpassword: oldpassword,
          newpassword: newpassword,
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
  }
  const contextValue = {
    changepass,
    all_product,
    all_article,
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default ContextProvider
