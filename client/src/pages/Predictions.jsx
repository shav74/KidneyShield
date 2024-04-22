import React from "react"
import "./CSS/Predictions.css"
import SubHero from "../components/SubHero/SubHero"
import HeroImage from "../assets/hero-1.jpg"
import SurveyModels from "../components/SurveyModels/SurveyModels"

const Articles = () => {
  return (
    <>
      <SubHero title={"Articles"} des={"lorem"} image={HeroImage} />
      <div className="container">
        <h2 style={{ marginTop: "5vh" }}>how to do</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque
          voluptate dolore debitis error sit libero cum mollitia, commodi ab
          deserunt repellat fugiat quos sed? Consequuntur aliquam accusantium
          nesciunt temporibus.
        </p>
        <SurveyModels />
        <p>disclaimer</p>
      </div>
    </>
  )
}

export default Articles
