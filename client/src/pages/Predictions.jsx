import React from "react"
import Title from "../components/Title/Title"
import Article_Slide from "../components/Article-Slide/Article-Slide"
import "./CSS/Predictions.css"
import SubHero from "../components/SubHero/SubHero"
import HeroImage from "../assets/hero-1.jpg"

const Articles = () => {
  return (
    <>
      <SubHero title={"Articles"} des={"lorem"} image={HeroImage} />
    </>
  )
}

export default Articles
