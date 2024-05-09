import React from "react"
import "./SurveyModels.css"
import program_1 from "../../assets/model1.jpg"
import program_2 from "../../assets/model2.jpg"
import program_3 from "../../assets/model3.jpg"
import program_4 from "../../assets/model4.jpg"

const SurveyModels = () => {
  return (
    <div className="survey-models">
      <div className="survey-model">
        <a href="/ckdsurvey">
          <img src={program_1} alt="image of the survey-model" />
        </a>
      </div>
      <div className="survey-model">
        <a href="/ckdmedicalsurvey">
          <img src={program_2} alt="image of the survey-model" />
        </a>
      </div>
      <div className="survey-model">
        <a href="/diabetessurvey">
          <img src={program_3} alt="image of the survey-model" />
        </a>
      </div>
      <div className="survey-model">
        <a href="/hntsurvey">
          <img src={program_4} alt="image of the survey-model" />
        </a>
      </div>
    </div>
  )
}

export default SurveyModels
