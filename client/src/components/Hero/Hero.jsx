import React from "react"
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>"Healthy Kidneys, Happy Lives"</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          consequuntur. Veritatis recusandae exercitationem facere. Obcaecati
          modi sunt possimus.
        </p>
        <button className="btn">
          Explore More{" "}
          <img src={dark_arrow} alt="small arrow for continue button" />
        </button>
      </div>
    </div>
  )
}

export default Hero
