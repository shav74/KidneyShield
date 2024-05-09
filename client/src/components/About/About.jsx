import React from "react"
import "./About.css"
import play_icon from "../../assets/play-icon.png"

const About = ({ setPlayState, thumbnail, source, data }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={thumbnail} alt="about image" className="about-img" />
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
        <h3>{data.title}</h3>
        <h2>{data.description}</h2>
        <p>
          {data.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </p>
      </div>
    </div>
  )
}

export default About
