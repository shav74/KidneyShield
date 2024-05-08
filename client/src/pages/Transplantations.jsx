import React from "react"
import "./CSS/Predictions.css"
import SubHero from "../components/SubHero/SubHero"
import HeroImage from "../assets/hero-1.jpg"
import About from "../components/About/About"
import Waitlist from "../components/Waitlist/Waitlist"

const Transplantations = () => {
  return (
    <div>
      <SubHero title={"Transplantations"} des={"lorem"} image={HeroImage} />
      <About />
      <Waitlist />
    </div>
  )
}

export default Transplantations
