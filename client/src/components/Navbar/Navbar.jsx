import React, { useEffect, useState } from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from "react-router-dom"

const Navbar = ({ isHomeScreen }) => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky && isHomeScreen ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo image" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/articles">Kidney Health</a>
        </li>
        <li>
          <a href="/predictions">Risk Prediction</a>
        </li>
        <li>
          <a href="/transplantations">Transplantations</a>
        </li>
        <li>Donate</li>
        <li>
          {localStorage.getItem("auth-token") ? (
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px 25px",
                  backgroundColor: "white",
                  borderRadius: "30px",
                }}
                href="/profile"
              >
                Profile
              </a>
            </li>
          ) : (
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px 25px",
                  backgroundColor: "white",
                  borderRadius: "30px",
                }}
                href="/login"
              >
                Log In/Sign Up
              </a>
            </li>
          )}
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="burger icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  )
}

export default Navbar
