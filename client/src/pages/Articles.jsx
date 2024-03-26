import React from "react"
import Title from "../components/Title/Title"
import Article_Slide from "../components/Article-Slide/Article-Slide"
import "./CSS/Articles.css"

const Articles = () => {
  return (
    <div className="container">
      <Title title={"Hello"} subTitle={"ammo"}></Title>
      <Article_Slide></Article_Slide>

      <div className="blue-slide">
        <Title title={"Hello"} subTitle={"ammo"}></Title>
        <Article_Slide></Article_Slide>
      </div>

      <Title title={"Hello"} subTitle={"ammo"}></Title>
      <Article_Slide></Article_Slide>
    </div>
  )
}

export default Articles
