import React from "react"
import "./Campus.css"
import white_arrow from "../../assets/white-arrow.png"

const Campus = ({ gallery }) => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery[0]} alt="gallery images" />
        <img src={gallery[1]} alt="gallery images" />
        <img src={gallery[2]} alt="gallery images" />
        <img src={gallery[3]} alt="gallery images" />
      </div>
      <a href="/predictions">
        <button className="btn dark-btn">
          Take Survey <img src={white_arrow} alt="small arrow in the button" />
        </button>
      </a>
    </div>
  )
}

export default Campus
