import React, { useState } from "react"
import Title from "../components/Title/Title"
import Article_Slide from "../components/Article-Slide/Article-Slide"
import "./CSS/Articles.css"
import HeroImage from "../assets/hero-article.png"
import SubHero from "../components/SubHero/SubHero"
import About from "../components/About/About"
import video from "../assets/video2.mp4"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import thumbnail from "../assets/thumbnail2.png"

const Articles = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <>
      <SubHero title={"Articles"} image={HeroImage} des={"elakiri"} />
      <div className="container">
        <Title title={"Latest Articles"} subTitle={"know better"}></Title>
        <Article_Slide category="latest"></Article_Slide>

        <About
          setPlayState={setPlayState}
          thumbnail={thumbnail}
          source={video}
          data={{
            title: "How Kidneys Work",
            description: "Learn How Your Kidneys Work",
            content: [
              "The kidneys are two bean-shaped organs that play a vital role in maintaining the body's overall health. They filter blood to remove waste products and excess fluids, which are excreted as urine. Additionally, the kidneys help regulate blood pressure, maintain a proper balance of electrolytes, and produce hormones crucial for red blood cell production and bone health. By filtering around 120-150 quarts of blood daily, the kidneys ensure a stable internal environment, which is essential for normal bodily functions.",
              "This small video explains how kidneys work and what they do. When your kidneys are healthy, they clean your blood. They also make hormones that keep your bones strong and your blood healthy. When your kidneys fail, you need treatment to replace the work your kidneys used to do. Unless you have a kidney transplant, you will need a treatment called dialysis.",
            ],
          }}
        ></About>

        <div className="blue-slide">
          <Title
            title={"How to Protect Yourself"}
            subTitle={"live healthy"}
          ></Title>
          <Article_Slide category="health"></Article_Slide>
        </div>
        <VideoPlayer
          playState={playState}
          setPlayerState={setPlayState}
          source={video}
        />
      </div>
    </>
  )
}

export default Articles
