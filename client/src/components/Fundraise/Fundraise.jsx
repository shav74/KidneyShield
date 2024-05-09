import React from "react"
import "./Fundraise.css" // Import the CSS file
import image1 from "../../assets/help2.jpg"
import image2 from "../../assets/help4.jpg"
import image3 from "../../assets/help1.jpg"
import image4 from "../../assets/support.jpg"

const Fundraise = () => {
  return (
    <div className="fundraise">
      <div className="fundraise-section">
        <img src={image1} alt="Flower" />
        <h2>Honor a loved one</h2>
        <p>Create a fundraising page in honor of a loved one.</p>
      </div>
      <div className="fundraise-section">
        <img src={image2} alt="Handshake" />
        <h2>Fundraise your way</h2>
        <p>Celebrate milestones or use your passions and hobbies.</p>
      </div>
      <div className="fundraise-section">
        <img src={image3} alt="Runners" />
        <h2>Challenge yourself</h2>
        <p>
          Get out and move to test your endurance and strength — and to fight
          kidney disease.
        </p>
      </div>
      <div className="fundraise-section">
        <img src={image4} alt="Streaming" />
        <h2>Stream to support</h2>
        <p>
          Join the Team Kidney Streams community to help raise important funds
          and awareness.
        </p>
      </div>
    </div>
  )
}

export default Fundraise
