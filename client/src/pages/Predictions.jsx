import React from "react"
import "./CSS/Predictions.css"
import SubHero from "../components/SubHero/SubHero"
import HeroImage from "../assets/hero-1.jpg"
import SurveyModels from "../components/SurveyModels/SurveyModels"
import Title from "../components/Title/Title"

const Articles = () => {
  return (
    <>
      <SubHero
        title={"Risk Analysis"}
        des={"Kidney Health Matters, Your Guide to Living Better."}
        image={HeroImage}
      />
      <div className="container">
        <Title
          subTitle={"Start now"}
          title={"Guard Your Kidneys. Prevention Starts Here."}
        ></Title>
        <p style={{ padding: "10px 5vw", fontSize: "1.1rem" }}>
          Answer a few questions, and we'll provide you with personalized
          information about your kidney health. Our simple questionnaire
          assesses key factors like lifestyle, medical history, and daily habits
          to offer a comprehensive understanding of your kidney function and
          risk for related diseases. However, please remember that these results
          may not be completely accurate and always require professional support
          for a definitive assessment. This tool serves as a helping hand,
          providing you with initial insights and guiding your next steps. Based
          on your results, you'll be redirected to information centers and
          kidney professionals, where you'll find more detailed guidance, and
          necessary follow-up actions will be shown. Empower yourself with the
          information to consult a healthcare provider and take proactive steps
          toward maintaining your kidney health and overall well-being
        </p>
        <SurveyModels />
        <p style={{ padding: "10px 5vw", marginBottom: "5vh", color: "grey" }}>
          Disclaimer: The information provided by this questionnaire is for
          informational purposes only and is not a substitute for professional
          medical advice, diagnosis, or treatment. Always seek the guidance of
          your physician or other qualified health provider with any questions
          you may have regarding a medical condition. Relying solely on the
          results of this tool is not recommended. If you believe you may have a
          medical emergency, contact your doctor immediately
        </p>
      </div>
    </>
  )
}

export default Articles
