import React from "react"
import "./SubHero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = ({ title, des, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="SubHero container"
    >
      <div className="SubHero-text">
        <h1>{title}</h1>
        <p>{des}</p>
      </div>
    </div>
  )
}

export default Hero
