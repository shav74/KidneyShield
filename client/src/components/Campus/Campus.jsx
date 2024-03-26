import React from "react"
import "./Campus.css"
import gallery_1 from "../../assets/gallery-1.jpg"
import gallery_2 from "../../assets/gallery-2.jpg"
import gallery_3 from "../../assets/gallery-3.jpg"
import gallery_4 from "../../assets/gallery-4.jpg"
import white_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery images" />
        <img src={gallery_2} alt="gallery images" />
        <img src={gallery_3} alt="gallery images" />
        <img src={gallery_4} alt="gallery images" />
      </div>
      <button className="btn dark-btn">
        Take Survey <img src={white_arrow} alt="small arrow in the button" />
      </button>
    </div>
  )
}

export default Campus
