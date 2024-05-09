import React from "react"
import "./CSS/Myaccount.css"
import { Context } from "../context/Context"
import { useState } from "react"
import { useContext, useAu } from "react"
import Breadcrumb from "../components/Breadcrums/Breadcrum"
import Title from "../components/Title/Title"

const Myaccount = () => {
  const { changepass } = useContext(Context)
  const [oldpassword, setoldpassword] = useState("")
  const [newpassword, setnewpassword] = useState("")
  const [email, setemail] = useState("")

  const logout = () => {
    localStorage.removeItem("auth-token")
    window.location.href = "/login"
  }

  return (
    <>
      <Breadcrumb title="My Account" />
      <Title subTitle={"Manage Your Accout"} title={"Profile"} />
      <div className="container-account">
        <div className="myaccount">
          <div className="myaccount-container">
            <div className="myaccount-info">
              <h3>Update password</h3>
              <hr />
              <br />

              <p>Enter old password (current)</p>
              <form>
                <input
                  type="text"
                  name="email"
                  onChange={(event) => setemail(event.target.value)}
                  placeholder="email"
                />

                <input
                  type="text"
                  name="oldpassword"
                  onChange={(event) => setoldpassword(event.target.value)}
                  placeholder="Old password"
                />

                <p>Enter new password</p>
                <input
                  type="text"
                  name="newpassword"
                  onChange={(event) => setnewpassword(event.target.value)}
                  placeholder="New password"
                />

                <div className="submit-btn">
                  <button
                    className="btn dark-btn"
                    onClick={() => {
                      changepass(oldpassword, newpassword, email)
                    }}
                  >
                    Change Password
                  </button>
                </div>
              </form>
              <br />
              <hr />
              <br />
              <button
                className="btn dark-btn"
                onClick={() => {
                  logout()
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Myaccount
