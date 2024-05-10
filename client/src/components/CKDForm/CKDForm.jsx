import React, { useState } from "react"
import "./CKDForm.css"
import white_arrow from "../../assets/white-arrow.png"
import Title from "../Title/Title"
import Locations from "../Locations/Locations"
import Programs from "../Programs/Programs"
import fact1 from "../../assets/facts1.jpg"
import fact2 from "../../assets/facts2.jpg"
import fact3 from "../../assets/facts3.jpg"
import ArticleSlide from "../Article-Slide/Article-Slide"

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
            <p>
              Please review the list of conditions provided and select each one
              that you currently have or have had in the past. Your accurate
              health history will help us offer more precise guidance.
            </p>
            <br />
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
              <label htmlFor="bSnakeBite">Poisoning or Snake bites</label>
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
            <p>
              {" "}
              Please indicate if any of your immediate family members (parents,
              siblings, children) have had specific health conditions. This will
              help us understand potential hereditary risks and provide more
              personalized recommendations.
            </p>
            <br />
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
                Kidney related issues (CKDu, CKD)
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
        <div className="main-result">
          {ckd ? (
            <>
              <h1 id="positive-result">You are in risk of CKD/CKDu</h1>
              <h2>Risk level - {Math.floor(result * 10)}</h2>
              <p>You have common risk factors</p>
            </>
          ) : (
            <>
              <h1 id="negative-result">CKD Not Detected</h1>
              {formData["MOH"] == 0 && formData["Occupation"] == 0 ? (
                <h3>
                  CKDu risk detected beacuse you are from North Central Province
                  and a farmer
                </h3>
              ) : formData["MOH"] == 0 ? (
                <h3>
                  CKDu risk detected beacuse you are from North Central Province
                </h3>
              ) : null}
              <h2>Risk level - {Math.ceil(result * 10)}</h2>
              <p>But there are some risk factors</p>
            </>
          )}
        </div>
        <p id="results-intro">
          Chronic Kidney Disease (CKD)/ Chronic Kidney Disease of Unknown
          Etiology(CKDu) can develop due to a combination of risk factors that,
          when present in greater numbers, increase your vulnerability. Taking
          necessary steps to reduce these risk factors is crucial for healthier
          kidneys and overall well-being. We are here to guide you with
          actionable insights so that you can make the best decisions for your
          kidney health. Find practical recommendations below to support your
          journey.
        </p>
        <h2 id="risk-factors-heading">Identified Risk Factors</h2>
        {formData["Occupation"] == 0 && (
          <div className="result-section">
            <h2>Occupation</h2>
            <p>
              In Sri Lanka, there's a significant correlation between occupation
              and chronic kidney disease (CKD), particularly in farming
              communities. Farmers in the dry zone regions, where CKD prevalence
              is high, are frequently exposed to pesticides and agrochemicals.
              This occupational exposure, combined with other factors like
              dehydration from working in hot climates and potentially
              contaminated groundwater, contributes to a higher incidence of CKD
              among agricultural workers.
            </p>
          </div>
        )}
        {formData["SourceofWater"] == 0 && (
          <div className="result-section">
            <h2>Water Sources</h2>
            <p>
              Access to safe drinking water is a crucial step in managing your
              risk of chronic kidney disease (CKD). In Sri Lanka's North Central
              Province, groundwater, which is often the primary source, may
              contain harmful contaminants and heavy metals. To help protect
              against this, communities have been using reverse osmosis (RO)
              filters to remove potential toxins. By ensuring that you have
              access to filtered and safe drinking water, you can take an
              essential step toward reducing your risk of CKD. Here are some
              simple prevention steps
            </p>
            <br />
            <ol style={{ paddingLeft: "1vw" }}>
              <li>
                <b>Drink Filtered Water</b>: Ensure that your drinking water is
                treated or filtered properly.
              </li>
              <li>
                <b>Monitor Agrochemical Exposure</b>: If you're in farming,
                follow safe practices when using pesticides and fertilizers.
              </li>
              <li>
                <b>Stay Hydrated</b>: Drink enough water daily to prevent
                dehydration, which can stress your kidneys.
              </li>
              <li>
                <b>Regular Check-ups</b>: Early detection through regular health
                check-ups can help manage CKD more effectively.
              </li>
            </ol>
          </div>
        )}
        {formData["MOH"] == 0 && (
          <div className="result-section">
            <h2>Location</h2>
            <p>
              If you live in the North Central Province of Sri Lanka, you have a
              higher risk of developing chronic kidney disease (CKD) due to
              potential environmental and occupational factors. For those who
              have recently moved into this region, it's especially important to
              drink clean, filtered water to avoid contaminants that may be
              present in the groundwater. Staying well-hydrated is also crucial
              to reduce kidney stress and maintain optimal health. Make sure
              your drinking water is safe by using filters or consuming treated
              water.
            </p>
          </div>
        )}
        {formData["bDM"] && (
          <div className="result-section">
            <h2>Diabetes</h2>
            <p>
              Diabetes is a significant risk factor for CKD/CKDu, with about 33%
              of CKD patients having a history of diabetes. While diabetes can
              have a profound impact on kidney health, it can be managed and
              improved through healthy lifestyle choices. Adopting a balanced
              diet, engaging in regular physical activity, and maintaining a
              healthy weight can help manage diabetes and prevent its
              complications, including CKD. By keeping blood sugar levels in
              check, you reduce the risk of kidney damage and promote long-term
              health.
            </p>
          </div>
        )}
        {formData["bHNT"] && (
          <div className="result-section">
            <h2>Hypertention/Heart deceases</h2>
            <p>
              High blood pressure (hypertension) is a leading cause of chronic
              kidney disease (CKD). It damages the tiny blood vessels in your
              kidneys, impairing their ability to filter waste and regulate
              fluids effectively. Over time, this damage can lead to kidney
              disease or even kidney failure. Among CKD patients, 67% have a
              history of either diabetes or hypertension.
            </p>
            <p>
              Managing blood pressure is essential to protect your kidneys. Work
              closely with your doctor to monitor and control your blood
              pressure. Additionally, adopting a kidney-friendly diet and
              maintaining a regular exercise routine can significantly reduce
              your risk and promote better kidney health.
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
              Poisoning and snake bites are less common but notable causes of
              acute kidney injury, which can sometimes lead to chronic kidney
              disease (CKD). Certain snake venoms can directly harm the kidneys
              or cause muscle damage, leading to the release of toxins that can
              overload the kidneys. Additionally, exposure to environmental
              toxins or ingesting contaminated substances may also cause kidney
              damage.
            </p>
            <p>
              If you suspect poisoning or are bitten by a snake, seek immediate
              medical attention. Early treatment is crucial to minimize kidney
              injury. Preventive measures include staying alert in areas where
              snakes are common and avoiding ingestion of potentially
              contaminated substances.
            </p>
          </div>
        )}
        {formData["bCKD"] ||
          (formData["bCKDu"] && (
            <div className="result-section">
              <h2>CKD</h2>
              <p>
                If you've had any form of kidney disease before, you're at a
                higher risk of developing chronic kidney disease (CKD) again.
                This is because previous damage can make the kidneys more
                vulnerable to future issues. Regular health check-ups and
                monitoring your kidney function can help catch any signs early.
                By sticking to a healthy lifestyle and following your doctor's
                advice, you can better manage your risk factors and prevent
                further kidney damage.
              </p>
            </div>
          ))}
        {formData["bHDL"] && (
          <div className="result-section">
            <h2>Colestrol</h2>
            <p>
              High cholesterol can significantly impact your kidney health. When
              cholesterol levels are elevated, fatty deposits can build up in
              blood vessels, restricting blood flow to your kidneys. This
              reduced blood flow can impair kidney function over time and
              increase the risk of developing chronic kidney disease (CKD).
            </p>
            <p>
              Maintaining healthy cholesterol levels through a balanced diet,
              regular exercise, and medications if prescribed by your doctor can
              help protect your kidneys. Reducing saturated fats, increasing
              fiber intake, and staying physically active are excellent steps to
              promote healthier cholesterol levels and prevent potential kidney
              damage.
            </p>
          </div>
        )}
        {formData["bUTI"] && (
          <div className="result-section">
            <h2>Urinary Tract Infection</h2>
            <p>
              Urinary tract infections (UTIs), especially if they happen often
              or go untreated, can lead to kidney damage and increase the risk
              of chronic kidney disease (CKD). If bacteria travel up from the
              bladder to the kidneys, it can cause a serious infection known as
              pyelonephritis that may harm kidney function.
            </p>
          </div>
        )}
        {formData["bCKDFamily"] ||
          (formData["bCKDUFamily"] && (
            <div className="result-section">
              <h2>Family Kidney issues</h2>
              <p>
                If you have a family history of chronic kidney disease (CKD), it
                increases your own risk due to genetic factors or shared
                lifestyle habits. This makes it especially important to monitor
                your kidney health if close family members have had CKD.Here's
                how to reduce your risk:
              </p>
              <ol style={{ paddingLeft: "1vw" }}>
                <li>
                  <b>Get Regular Check-ups</b>: Routine health screenings can
                  help catch early signs of CKD.
                </li>
                <li>
                  <b>Adopt a Healthy Lifestyle</b>: Eating well, staying active,
                  and managing stress are all crucial to lowering your risk.
                </li>
                <li>
                  <b>Discuss with Your Doctor</b>: Inform your doctor about your
                  family history so they can tailor recommendations and
                  screening intervals for you.
                </li>
              </ol>
            </div>
          ))}
        {(formData["bDMFamily"] || formData["bHTNFamily"]) && (
          <div className="result-section">
            <h2>Family other deceases</h2>
            <p>
              If your family members have a history of diabetes or high blood
              pressure (hypertension), you are at a greater risk of developing
              these conditions as well. This genetic predisposition makes you
              more vulnerable to chronic kidney disease (CKD), as both diabetes
              and hypertension can cause significant kidney damage over time.
              Understanding this heightened risk can help you take proactive
              steps, such as maintaining a healthy diet, staying physically
              active, and regularly monitoring your blood sugar and blood
              pressure. These measures can help you reduce your risk and support
              long-term kidney health.
            </p>
          </div>
        )}
        {formData["bCancer"] ||
          formData["bBA"] ||
          formData["bDengue"] ||
          formData["bMalaria"] ||
          (formData["bLepto"] && (
            <div className="result-section">
              <h2>Other Causes</h2>
              <p>
                Other diseases, such as cancer, dengue fever, malaria, and
                leptospirosis, can also increase the risk of chronic kidney
                disease (CKD). Here's a quick overview of how each condition
                affects kidney health:
              </p>
              <ol style={{ paddingLeft: "1vw" }}>
                <li>
                  <b>Cancer</b>: Some cancers, as well as certain chemotherapy
                  drugs, can directly damage the kidneys or impair their
                  function.
                </li>
                <li>
                  <b>Dengue Fever</b>: This mosquito-borne illness can cause
                  acute kidney injury if the infection is severe.
                </li>
                <li>
                  <b>Malaria</b>: Malaria parasites can lead to kidney
                  complications, especially in cases of severe malaria.
                </li>
                <li>
                  <b>Leptospirosis</b>: This bacterial infection, often spread
                  through contaminated water, can cause acute kidney injury if
                  left untreated.
                </li>
              </ol>
              <p>
                It's important to seek medical treatment promptly for these
                conditions to prevent potential kidney damage. Regular health
                check-ups and maintaining a healthy lifestyle can also help
                minimize the long-term impact on your kidneys.
              </p>
            </div>
          ))}
        <Title
          title={"Recommended Places to Get Help"}
          subTitle={"where to get help"}
        />
        <Locations />
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

export default CKDForm
