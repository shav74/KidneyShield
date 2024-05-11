import React from "react"
import SubHero from "../components/SubHero/SubHero"
import image from "../assets/ckdprediction.png"
import DiabetesForm from "../components/DiabetesForm/DiabetesForm"

const DiabetesSurvey = () => {
  return (
    <div>
      <SubHero
        title={"Diabetes Prediction Survey"}
        des={"Diabetes Risk Analysis based on simple Medical data & Survey."}
        image={image}
      />
      <div className="container">
        <DiabetesForm />
      </div>
    </div>
  )
}

export default DiabetesSurvey
