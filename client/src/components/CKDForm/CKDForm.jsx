import React, { useState } from "react"
import "./CKDForm.css"
import white_arrow from "../../assets/white-arrow.png"

const CKDForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    Occupation: 0,
    SourceofWater: 2,
    Age: 45,
    Gender: 1,
    MOH: 1,
    BMI: 25.6,
    bCKD: false,
    bDM: false,
    bHNT: false,
    bHDL: false,
    bRenalCalculi: false,
    bMalaria: false,
    bDengue: false,
    bLepto: false,
    bSnakeBite: false,
    bCKDu: false,
    bUTI: false,
    bCancer: false,
    bBA: false,
    bCKDFamily: false,
    bDMFamily: false,
    bHTNFamily: false,
    bCKDUFamily: false,
    BP_systolic: 120,
    BP_diastolic: 80,
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

  const handlePrev = () => {
    setStep(step - 1)
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    postData("http://127.0.0.1:8000/ckdu", formData)
  }
  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const jsonResponse = await response.json() // Assuming the server responds with JSON
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
            <h2>Personal Information</h2>
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

            <label htmlFor="Gender">Gender</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="form-input"
            >
              <option value="" disabled>
                Select your Gender
              </option>
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </select>

            <label htmlFor="BMI">BMI</label>
            <input
              type="number"
              name="BMI"
              placeholder="Enter your BMI"
              value={formData.BMI}
              onChange={handleChange}
              className="form-input"
            />

            <label htmlFor="Occupation">Occupation</label>
            <select
              name="Occupation"
              value={formData.Occupation}
              onChange={handleChange}
              className="form-input"
            >
              <option value="" disabled>
                Select your Occupation
              </option>
              <option value={0}>Farmer</option>
              <option value={1}>Other</option>
            </select>

            <label htmlFor="SourceofWater">Source of Water</label>
            <select
              name="SourceofWater"
              value={formData.SourceofWater}
              onChange={handleChange}
              className="form-input"
            >
              <option value="" disabled>
                Select your water source
              </option>
              <option value={3}>Tap Water</option>
              <option value={0}>Well Water</option>
              <option value={1}>RO Filter</option>
            </select>
            <label htmlFor="MOH">Province</label>
            <select
              name="MOH"
              value={formData.MOH}
              onChange={handleChange}
              className="form-input"
            >
              <option value="" disabled>
                Select your Province
              </option>
              <option value={0}>North Central Province</option>
              <option value={1}>Other</option>
            </select>
          </div>
        )
      case 2:
        return (
          <div className="form-step">
            <h2>Step 2: Health History</h2>
            <div className="form-group">
              <input
                type="checkbox"
                name="bDM"
                checked={formData.bDM}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bDM">Diabetes</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bHNT"
                checked={formData.bHNT}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bHNT">Hypertension</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bCKD"
                checked={formData.bCKD}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bCKD">Chronic Kidney Disease</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bRenalCalculi"
                checked={formData.bRenalCalculi}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bRenalCalculi">Renal Calculi</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bMalaria"
                checked={formData.bMalaria}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bMalaria">Malaria</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bDengue"
                checked={formData.bDengue}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bDengue">Dengue</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bHDL"
                checked={formData.bHDL}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bHDL">High-density Lipoprotein Issues</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bLepto"
                checked={formData.bLepto}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bLepto">Leptospirosis</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bSnakeBite"
                checked={formData.bSnakeBite}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bSnakeBite">Snake Bite</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bCKDu"
                checked={formData.bCKDu}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bCKDu">CKDu</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bUTI"
                checked={formData.bUTI}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bUTI">Urinary Tract Infection</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bCancer"
                checked={formData.bCancer}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bCancer">Cancer</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="bBA"
                checked={formData.bBA}
                className="form-input"
                onChange={handleChange}
              />
              <label htmlFor="bBA">Bronchial Asthma</label>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="form-step">
            <h2>Family Health History</h2>
            <div className="form-group">
              <input
                type="checkbox"
                name="bDMFamily"
                id="bDMFamily"
                checked={formData.bDMFamily}
                onChange={handleChange}
                className="form-input"
              />
              <label htmlFor="bDMFamily">Diabetes Mellitus</label>
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                name="bHTNFamily"
                id="bHTNFamily"
                checked={formData.bHTNFamily}
                onChange={handleChange}
                className="form-input"
              />
              <label htmlFor="bHTNFamily">Hypertension</label>
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                name="bCKDUFamily"
                id="bCKDUFamily"
                checked={formData.bCKDUFamily}
                onChange={handleChange}
                className="form-input"
              />
              <label htmlFor="bCKDUFamily">
                Chronic Kidney Disease of Uncertain etiology
              </label>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="multi-step-form">
      <div className="progress-bar">
        <div className={`progress-step ${step === 1 ? "active" : ""}`}>1</div>
        <div className={`progress-step ${step === 2 ? "active" : ""}`}>2</div>
        <div className={`progress-step ${step === 3 ? "active" : ""}`}>3</div>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        {renderStep()}
        <div className="button-container">
          {step > 1 && (
            <button type="button" onClick={handlePrev} className="btn dark-btn">
              <img
                src={white_arrow}
                alt="small arrow button"
                style={{ transform: "rotate(180deg)" }}
              />
              &nbsp; Prev
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={handleNext} className="btn dark-btn">
              Next <img src={white_arrow} alt="small arrow button" />
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="btn dark-btn">
              Submit <img src={white_arrow} alt="small arrow button" />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CKDForm
