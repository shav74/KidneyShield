import React, { useState } from "react"
import info_icon from "../assets/info-icon.png"
import "./CSS/LoginSignup.css"
import Breadcrum from "../components/Breadcrums/Breadcrum"

const LoginSignup = () => {
  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login Function Executed", formData)
    let responseData
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data))

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token)
      window.location.replace("/")
    } else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Signup Function Executed", formData)
    let responseData
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data))

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token)
      window.location.replace("/")
    } else {
      alert(responseData.errors)
    }
  }

  return (
    <>
      <Breadcrum />
      <div className="login-form">
        <h3>{state}</h3>
        <div className="login-col">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Adress"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="loginsignup-info"></div>
        <button
          className="btn dark-btn"
          onClick={() => {
            state === "Login" ? login() : signup()
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have and account?{" "}
            <span
              onClick={() => {
                setState("Login")
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up")
              }}
            >
              Register Here
            </span>
          </p>
        )}
      </div>
    </>
  )
}

export default LoginSignup
