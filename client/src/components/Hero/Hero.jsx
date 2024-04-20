import React from "react"
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = ({ title, des, image }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(64, 56, 222, 0.3), rgba(64, 56, 222, 0.1)),url(${image})`,
      }}
      className="hero container"
    >
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{des}</p>
        <button className="btn">
          Explore More{" "}
          <img src={dark_arrow} alt="small arrow for continue button" />
        </button>
      </div>
    </div>
  )
}

export default Hero
