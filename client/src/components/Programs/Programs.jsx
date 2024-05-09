import React from "react"
import "./Programs.css"

const Programs = ({ links, images }) => {
  return (
    <div className="programs">
      <div className="program">
        <a href={links[0]}>
          <img src={images[0]} alt="image of the program" />
          <div className="caption">
            {/* <img src={program_icon_1} alt="" /> */}
            <h3>Know your risk</h3>
            <p>CKD/CDKu Risk Analysis</p>
          </div>
        </a>
      </div>
      <div className="program">
        <a href={links[1]}>
          <img src={images[1]} alt="image of the program" />
          <div className="caption">
            {/* <img src={program_icon_2} alt="" /> */}
            <h3>Transplatations</h3>
            <p>How to Donate</p>
          </div>
        </a>
      </div>
      <div className="program">
        <a href={links[2]}>
          <img src={images[2]} alt="image of the program" />
          <div className="caption">
            {/* <img src={program_icon_3} alt="" /> */}
            <h3>Kidney Basics</h3>
            <p>Simple Guide to be Healthy</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Programs
