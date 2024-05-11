import React, { useState } from "react"
import "../CKDForm/CKDForm.css"
import white_arrow from "../../assets/white-arrow.png"
import Title from "../Title/Title"
import Programs from "../Programs/Programs"
import fact1 from "../../assets/facts1.jpg"
import fact2 from "../../assets/facts2.jpg"
import fact3 from "../../assets/facts3.jpg"
import ArticleSlide from "../Article-Slide/Article-Slide"

const DiabetesForm = () => {
  const [step, setStep] = useState(1)
  const [showForm, setShowForm] = useState(true)
  const [result, setResult] = useState(0)
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  })

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked ? true : false,
      })
      return
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    const resultFromPost = await postData(
      "http://127.0.0.1:8000/diabetes",
      formData
    )
    console.log(resultFromPost)

    setResult(resultFromPost)
    setShowForm(false)
  }

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const jsonResponse = await response.json()
      console.log("Success:", jsonResponse)
      return jsonResponse
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Basic Information</h2>
            <p>
              Please complete the form with your current and accurate
              information to ensure we can provide you with the most relevant
              insights about your kidney health.
            </p>
            <br />
            <br />
            <label htmlFor="Age">Age</label>
            <input
              type="number"
              name="Age"
              placeholder="Enter your Age"
              value={formData.Age}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="BMI">BMI</label>
            <input
              type="number"
              name="BMI"
              placeholder="Enter your BMI"
              value={formData.BMI}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="Pregnancies">Pregnancies</label>
            <input
              type="number"
              name="Pregnancies"
              placeholder="Enter Number of Pregnancies"
              value={formData.Pregnancies}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="Glucose">Glucose</label>
            <input
              type="number"
              name="Glucose"
              placeholder="Enter Glucose level"
              value={formData.Glucose}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="BloodPressure">Blood Pressure</label>
            <input
              type="number"
              name="BloodPressure"
              placeholder="Enter Blood Pressure"
              value={formData.BloodPressure}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="SkinThickness">Skin Thickness</label>
            <input
              type="number"
              name="SkinThickness"
              placeholder="Enter Skin Thickness"
              value={formData.SkinThickness}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="Insulin">Insulin</label>
            <input
              type="number"
              name="Insulin"
              placeholder="Enter Insulin"
              value={formData.Insulin}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="DiabetesPedigreeFunction">
              Diabetes Pedigree Function
            </label>
            <input
              type="number"
              name="DiabetesPedigreeFunction"
              placeholder="Enter Diabetes Pedigree Function"
              value={formData.DiabetesPedigreeFunction}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )
      default:
        return null
    }
  }

  if (!showForm) {
    const ckd = Number(result) > 0.5
    return (
      <div className="result-container">
        <div className="main-result">
          {ckd ? (
            <>
              <h1 id="positive-result">You have Diabetes</h1>
            </>
          ) : (
            <>
              <h1 id="negative-result">You do not have Diabetes</h1>
            </>
          )}
        </div>

        <Title
          title={"Lower Your Risk by Staying Healthy"}
          subTitle={"be healthier"}
        />
        <ArticleSlide category={"health"} zoomLevel={1} />
      </div>
    )
  }
  return (
    <>
      <Title
        title={"Answer a Simple Survey to Get Started"}
        subTitle={"Prevent, Maintain, Thrive."}
      />
      <div className="multi-step-form">
        <form onSubmit={handleSubmit} className="form-container">
          {renderStep()}
          <div className="button-container">
            <button type="submit" className="btn dark-btn">
              Submit <img src={white_arrow} alt="small arrow button" />
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <p
        style={{
          paddingBottom: "5vh",
        }}
        id="disclaimer"
      >
        Our analysis is focused specifically for <b> Sri Lankan</b> users, using
        data that reflects the unique lifestyle, dietary habits, and health
        conditions in Sri Lanka. By focusing on locally relevant trends, medical
        practices, and environmental factors, we can provide insights that are
        specialized and accurate for the Sri Lankan population
      </p>
      <p
        style={{
          paddingBottom: "5vh",
          fontSize: "0.9rem",
          color: "grey",
        }}
        id="disclaimer"
      >
        Disclaimer: Your data is private and secure. It is used solely for
        analytical purposes and is not stored on our servers. We are committed
        to protecting your privacy, ensuring that any information you provide
        remains confidential and is processed only to deliver accurate and
        tailored health recommendations.
      </p>

      <Title title={"Get to know more"} subTitle={"facts for you"} />
      <Programs links={[]} images={[fact1, fact2, fact3]} />
    </>
  )
}

export default DiabetesForm
