import React from "react"
import "./About.css"
import about_img from "../../assets/hero-1.jpg"
import play_icon from "../../assets/play-icon.png"

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about image" className="about-img" />
        <img
          src={play_icon}
          alt="play button for the video"
          className="play-icon"
          onClick={() => {
            setPlayState(true)
          }}
        />
      </div>
      <div className="about-right">
        <h3>TRANSPLANTATIONS FOR ALL</h3>
        <h2>Information on Kidney Transplantation</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolore
          reiciendis soluta officia dignissimos, vel maxime et voluptate magni.
          Voluptatibus, facere! Totam enim dicta aut eligendi quo! Odit,
          molestias deserunt.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          laudantium facilis sapiente perferendis voluptate, eos velit numquam
          labore mollitia officiis sequi
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          nulla voluptates rerum fuga voluptatum modi, velit nam nisi, voluptas
          quod ea temporibus, deserunt recusandae magnam excepturi animi.
        </p>
      </div>
    </div>
  )
}

export default About
