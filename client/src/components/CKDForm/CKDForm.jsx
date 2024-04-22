import React, { useState } from "react"
import "./CKDForm.css"

const CKDForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
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
    // Submit form data
    console.log(formData)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Step 1: Personal Information</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )
      case 2:
        return (
          <div className="form-step">
            <h2>Step 2: Contact Information</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )
      case 3:
        return (
          <div className="form-step">
            <h2>Step 3: Create Password</h2>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
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
            <button
              type="button"
              onClick={handlePrev}
              className="form-button prev"
            >
              Prev
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNext}
              className="form-button next"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="form-button submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CKDForm
