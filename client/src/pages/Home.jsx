import React, { useState } from "react"
import Title from "../components/Title/Title"
import Programs from "../components/Programs/Programs"
import About from "../components/About/About"
import Campus from "../components/Campus/Campus"
import ArticleSlide from "../components/Article-Slide/Article-Slide"
import Contact from "../components/Contact/Contact"
import Hero from "../components/Hero/Hero"
import HeroImage from "../assets/hero.jpg"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import image_1 from "../assets/kidney-analysis.jpg"
import image_2 from "../assets/kidney-donation.jpg"
import image_3 from "../assets/kidney-basics.jpg"
import source from "../assets/video.mp4"
import thumbnail from "../assets/transplant1.jpg"

import gallery_1 from "../assets/gallery-1.jpg"
import gallery_2 from "../assets/gallery-2.jpg"
import gallery_3 from "../assets/gallery-3.jpg"
import gallery_4 from "../assets/gallery-4.jpg"
import ChatbotEmbed from "../components/ChatBot/ChatbotEmbed"

const Home = () => {
  const [playState, setPlayState] = useState(false)
  const links = ["/predictions", "/transplantations", "/articles"]
  const images = [image_1, image_2, image_3]
  const gallery = [gallery_1, gallery_2, gallery_3, gallery_4]

  return (
    <div>
      <Hero
        title={"Healty Kideys, Happy Lives"}
        des={"Guard Your Health, Guard Your Kidneys: Prevention Starts Here."}
        image={HeroImage}
        link={"/articles"}
      />
      <div className="container">
        <Title subTitle="top features" title="How can we help you" />
        <Programs links={links} images={images} />
        <About
          data={{
            title: "TRANSPLANTATIONS FOR ALL",
            description: "Information on Kidney Transplantation",
            content: [
              "Kidney transplantation is a treatment, not a cure. Your new kidney will usually come from a donor who has died. But sometimes it may come from a living donor, such as a family member. The surgery to place the new kidney in your body is called a transplant operation.",
              "When you get a kidney transplant, a healthy kidney is placed inside your body to do the work your own kidneys can no longer do. On average, a kidney transplant from a living donor lasts about 15 to 20 years, and a kidney from a deceased donor lasts 8 to 12 years. Some will last longer; others will last less.",
            ],
          }}
          setPlayState={setPlayState}
          thumbnail={thumbnail}
          source={source}
        />
        <Title subTitle="are you safe" title="We're Here to Help" />
        <Campus gallery={gallery} />
        <Title subTitle="explore" title="Read Articles" />
        <ArticleSlide category={"health"} zoomLevel={1} />
        <Title subTitle="contact us" title="Get In Touch" />
        <Contact />
        <VideoPlayer
          playState={playState}
          setPlayerState={setPlayState}
          source={source}
        />
        <ChatbotEmbed />
      </div>
    </div>
  )
}

export default Home
