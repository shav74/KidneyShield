import React, { createContext } from "react"
export const Context = createContext(null)

const ContextProvider = (props) => {
  const changepass = (oldpassword, newpassword, email) => {
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/changepass", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
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

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ContextProvider
