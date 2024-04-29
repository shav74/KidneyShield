import React, { createContext } from "react"
export const Context = createContext()

const ContextProvider = ({ children }) => {
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
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default ContextProvider
