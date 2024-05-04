import React, { useState } from "react"
import "./CKDForm.css"
import white_arrow from "../../assets/white-arrow.png"
import Title from "../Title/Title"
import Programs from "../Programs/Programs"
import Locations from "../Locations/Locations"

const CKDForm = () => {
  const [step, setStep] = useState(1)
  const [showForm, setShowForm] = useState(true)
  const [result, setResult] = useState(0)
  const [formData, setFormData] = useState({
    Occupation: "",
    SourceofWater: "",
    Age: "",
    Gender: "",
    MOH: "",
    BMI: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    const resultFromPost = await postData(
      "http://127.0.0.1:8000/ckdu",
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

  if (!showForm) {
    const ckd = Number(result) > 0.5
    return (
      <div className="result-container">
        {ckd ? (
          <>
            <h1 id="positive-result">You are in risk of CKDu</h1>
            <p>You have common risk factors</p>
          </>
        ) : (
          <>
            <h1 id="negative-result">CKD Not Detected</h1>
            <p>but there are some risk factors</p>
          </>
        )}
        {formData["Occupation"] == 0 && (
          <div className="result-section">
            <h2>Occupation</h2>
            <p>
              Lorem ipsum dolor sit amet ggs consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["SourceofWater"] == 0 && (
          <div className="result-section">
            <h2>Water Sources</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["MOH"] == 0 && (
          <div className="result-section">
            <h2>Location</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bDM"] && (
          <div className="result-section">
            <h2>Diabetes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bHNT"] && (
          <div className="result-section">
            <h2>Hypertention/Heart deceases</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bSnakeBite"] && (
          <div className="result-section">
            <h2>Snake Bites and Poisoning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bRenalCalculi"] && (
          <div className="result-section">
            <h2>Kidney Stones</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bCKD"] ||
          (formData["bCKDu"] && (
            <div className="result-section">
              <h2>CKD</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
                similique eaque voluptates neque architecto, suscipit voluptatem
                quibusdam dignissimos error nam tenetur pariatur quod fugit!
              </p>
            </div>
          ))}
        {formData["bHDL"] && (
          <div className="result-section">
            <h2>Colestrol</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bUTI"] && (
          <div className="result-section">
            <h2>Urinary Tract Infection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
              similique eaque voluptates neque architecto, suscipit voluptatem
              quibusdam dignissimos error nam tenetur pariatur quod fugit!
            </p>
          </div>
        )}
        {formData["bCKDFamily"] ||
          (formData["bCKDUFamily"] && (
            <div className="result-section">
              <h2>Family Kidney issues</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
                similique eaque voluptates neque architecto, suscipit voluptatem
                quibusdam dignissimos error nam tenetur pariatur quod fugit!
              </p>
            </div>
          ))}
        {formData["bDMFamily"] ||
          (formData["bHTNFamily"] && (
            <div className="result-section">
              <h2>Family other deceases</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
                similique eaque voluptates neque architecto, suscipit voluptatem
                quibusdam dignissimos error nam tenetur pariatur quod fugit!
              </p>
            </div>
          ))}
        {formData["bCancer"] ||
          formData["bBA"] ||
          formData["bDengue"] ||
          formData["bMalaria"] ||
          (formData["bLepto"] && (
            <div className="result-section">
              <h2>Other Causes</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur saepe dolorem, doloribus fugiat reprehenderit, cum
                similique eaque voluptates neque architecto, suscipit voluptatem
                quibusdam dignissimos error nam tenetur pariatur quod fugit!
              </p>
            </div>
          ))}
        <Locations />
      </div>
    )
  }
  return (
    <>
      <Title title={"CKD Form"} subTitle={"get more"} />
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
              <button
                type="button"
                onClick={handlePrev}
                className="btn dark-btn"
              >
                <img
                  src={white_arrow}
                  alt="small arrow button"
                  style={{ transform: "rotate(180deg)" }}
                />
                &nbsp; Prev
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="btn dark-btn"
              >
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
      <Title title={"Get to know more"} subTitle={"facts for you"} />
      <Programs />
      <Title title={"Get Help"} subTitle={"best places to get help"} />
    </>
  )
}

export default CKDForm
