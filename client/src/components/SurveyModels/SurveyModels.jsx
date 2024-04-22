import React from "react"
import "./SurveyModels.css"
import program_1 from "../../assets/kidney-analysis.jpg"
import program_2 from "../../assets/kidney-donation.jpg"
import program_3 from "../../assets/kidney-basics.jpg"

const SurveyModels = () => {
  return (
    <div className="survey-models">
      <div className="survey-model">
        <img src={program_1} alt="image of the survey-model" />
      </div>
      <div className="survey-model">
        <img src={program_2} alt="image of the survey-model" />
      </div>
      <div className="survey-model">
        <img src={program_3} alt="image of the survey-model" />
      </div>
      <div className="survey-model">
        <img src={program_3} alt="image of the survey-model" />
      </div>
    </div>
  )
}

export default SurveyModels
