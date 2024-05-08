import React from "react"
import Title from "../components/Title/Title"
import Article_Slide from "../components/Article-Slide/Article-Slide"
import "./CSS/Articles.css"
import HeroImage from "../assets/hero-1.jpg"
import SubHero from "../components/SubHero/SubHero"
import About from "../components/About/About"

const Articles = () => {
  return (
    <>
      <SubHero title={"Articles"} image={HeroImage} des={"elakiri"} />
      <div className="container">
        <Title title={"Hello"} subTitle={"ammo"}></Title>
        <Article_Slide></Article_Slide>

        <About></About>

        <div className="blue-slide">
          <Title title={"Hello"} subTitle={"ammo"}></Title>
          <Article_Slide></Article_Slide>
        </div>

        <Title title={"Hello"} subTitle={"ammo"}></Title>
        <Article_Slide></Article_Slide>
      </div>
    </>
  )
}

export default Articles
