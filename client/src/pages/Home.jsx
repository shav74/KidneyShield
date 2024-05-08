import React, { useState } from "react"
import Title from "../components/Title/Title"
import Programs from "../components/Programs/Programs"
import About from "../components/About/About"
import Campus from "../components/Campus/Campus"
import Testimonials from "../components/Article-Slide/Article-Slide"
import Contact from "../components/Contact/Contact"
import Hero from "../components/Hero/Hero"
import HeroImage from "../assets/hero.jpg"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"

const Home = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Hero
        title={"Healty Kideys, Happy Lives"}
        des={"lorem for now"}
        image={HeroImage}
      />
      <div className="container">
        <Title subTitle="top features" title="How can we help you" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="are you safe" title="We're Here to Help" />
        <Campus />
        <Title subTitle="explore" title="Read Articles" />
        <Testimonials />
        <Title subTitle="contact us" title="Get In Touch" />
        <Contact />
        <VideoPlayer playState={playState} setPlayerState={setPlayState} />
      </div>
    </div>
  )
}

export default Home
