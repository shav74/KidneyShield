import React from "react"
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import loaction_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          asperiores sunt similique ipsa enim cupiditate nulla, quam libero
          veritatis quae nam! Repellat iusto voluptatem tempora vel a minus,
          quam consequuntur.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="mail icon" /> arunshavinda@icloud.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="phone icon" /> 077 2528 166
          </li>
          <li>
            {" "}
            <img src={loaction_icon} alt="loaction icon" /> No 24, St. Jude rd,
            Kandana
          </li>
        </ul>
      </div>
      <div className="contact-col">
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
          <label htmlFor="">Write your message here</label>
          <textarea
            name="messafe"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="small arrow button" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
