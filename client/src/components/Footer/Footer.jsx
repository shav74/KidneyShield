import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; Shavinda Silva {new Date().getFullYear()}. All rights reserved
      </p>
      <ul>
        <li>Terms and services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
