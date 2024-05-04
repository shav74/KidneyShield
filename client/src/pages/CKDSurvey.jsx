import React from "react"
import SubHero from "../components/SubHero/SubHero"
import CKDForm from "../components/CKDForm/CKDForm"
import Title from "../components/Title/Title"
import Programs from "../components/Programs/Programs"

const CKDSurvey = () => {
  return (
    <div>
      <SubHero
        title={"CKD Prediction Survey"}
        des={"lorem"}
        image={"https://placehold.co/600x400?text=CKD+prediction"}
      />
      <div className="container">
        <CKDForm />
      </div>
    </div>
  )
}

export default CKDSurvey
