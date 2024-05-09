import React from "react"
import SubHero from "../components/SubHero/SubHero"
import CKDForm from "../components/CKDForm/CKDForm"
import image from "../assets/ckdprediction.png"

const CKDSurvey = () => {
  return (
    <div>
      <SubHero
        title={"CKD Prediction Survey"}
        des={"CKD/CKDu Risk Analysis based on Survey."}
        image={image}
      />
      <div className="container">
        <CKDForm />
      </div>
    </div>
  )
}

export default CKDSurvey
