import React from "react"
import white_arrow from "../../assets/white-arrow.png"
import Title from "../Title/Title"
import ArticleSlide from "../Article-Slide/Article-Slide"

const Donate = () => {
  return (
    <>
      <div
        className="contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="contact-col"
          style={{
            border: "1px solid #212ea0",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <form action="">
            <label htmlFor="">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label htmlFor="">Amount</label>
            <input type="number" name="amount" placeholder="LKR" required />

            <label htmlFor="">Write your message here</label>
            <textarea
              name="messafe"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Donate
              <img src={white_arrow} alt="small arrow button" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Donate
