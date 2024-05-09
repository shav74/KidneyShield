import React, { createContext, useState, useEffect } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
  const { children } = props
  const [all_product, setAllProducts] = useState([])
  const [all_article, setAllArticles] = useState([])

  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://localhost:4000/waitlist")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => setAllProducts(data))
        .catch((error) => console.error("Error:", error))
    }

    const fetchArticles = () => {
      fetch("http://localhost:4000/articles")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((articleData) => {
          setAllArticles(articleData)
          console.log(articleData)
          console.log(all_article)
        })
        .catch((error) => console.error("Error:", error))
    }

    fetchProducts()
    fetchArticles()
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
