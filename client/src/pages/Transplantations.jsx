import React, { useState } from "react"
import "./CSS/Predictions.css"
import SubHero from "../components/SubHero/SubHero"
import thumbnail from "../assets/transplant2.jpg"
import heroImage from "../assets/transplant1.jpg"
import video from "../assets/video2.mp4"
import About from "../components/About/About"
import Waitlist from "../components/Waitlist/Waitlist"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"

const Transplantations = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <SubHero title={"Transplantations"} des={"lorem"} image={heroImage} />
      <About
        data={{
          title: "TRANSPLANTATIONS FOR ALL",
          description: "Give the Gift of Life: Be a Kidney Donor Today!",
          content: [
            "A kidney transplant can be a lifeline for individuals suffering from end-stage renal disease. It offers a second chance at life, freeing them from the burdens of dialysis and improving their overall quality of life. The demand for healthy donor kidneys is always high, and each transplant can add many years to a recipient's life. With one selfless act of donation, you can transform the lives of those in need and create a lasting legacy of kindness and hope.",
            "By sharing the message about kidney transplants and their life-saving impact, you can inspire friends and family to join the cause. Together, we can build a compassionate community that offers renewed life to those struggling with kidney disease. Become a donor today and let your generosity ripple outward in the lives of others.",
          ],
        }}
        setPlayState={setPlayState}
        thumbnail={thumbnail}
        source={video}
      ></About>
      <Waitlist />
      <VideoPlayer
        playState={playState}
        setPlayerState={setPlayState}
        source={video}
      />
    </div>
  )
}

export default Transplantations
