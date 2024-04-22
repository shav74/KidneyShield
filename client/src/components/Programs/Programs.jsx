import React from "react"
import "./Programs.css"
import program_1 from "../../assets/kidney-analysis.jpg"
import program_2 from "../../assets/kidney-donation.jpg"
import program_3 from "../../assets/kidney-basics.jpg"

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="image of the program" />
        <div className="caption">
          {/* <img src={program_icon_1} alt="" /> */}
          <h3>Know your risk</h3>
          <p>CKD/CDKu Risk Analysis</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="image of the program" />
        <div className="caption">
          {/* <img src={program_icon_2} alt="" /> */}
          <h3>Transplatations</h3>
          <p>How to Donate</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="image of the program" />
        <div className="caption">
          {/* <img src={program_icon_3} alt="" /> */}
          <h3>Kidney Basics</h3>
          <p>Simple Guide to be Healthy</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
