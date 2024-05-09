import "./CSS/Help.css"
import React from "react"
import Title from "../components/Title/Title"
import SubHero from "../components/SubHero/SubHero"
import image from "../assets/donate2.jpg"
import Donate from "../components/Donate/Donate"
import Fundraise from "../components/Fundraise/Fundraise"
import Contact from "../components/Contact/Contact"

const Help = () => {
  return (
    <div>
      <SubHero
        title={"Save a Life"}
        des={"Your Donation Makes a Difference!"}
        image={image}
      />
      <Title title={"Get Involved"} subTitle={"save a life"} />
      <Donate />
      <Title title={"Fundraise"} subTitle={"Involve In"} />
      <Fundraise />
      <Title title={"Contact Us to Help Others"} subTitle={"Get in touch"} />
      <div className="spacer">
        <Contact />
      </div>
    </div>
  )
}

export default Help
