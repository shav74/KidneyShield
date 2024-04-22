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
        <Title title={"Sya Something Here"} subTitle={"get to know This"} />
        <CKDForm />
        <Title subTitle={"facts"} title={"get to knoe more"} />
        <Programs />
      </div>
    </div>
  )
}

export default CKDSurvey
