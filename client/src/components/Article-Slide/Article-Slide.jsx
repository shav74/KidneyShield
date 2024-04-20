import React, { useRef } from "react"
import "./Article-Slide.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {
  const slider = useRef()
  let tx = 0

  const slideFoward = () => {
    if (tx > -50) {
      tx -= 25
    } else {
      tx = 0
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div>
      <div className="testimonials">
        <img
          src={next_icon}
          alt=""
          className="next-btn"
          onClick={slideFoward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <div>
                    <h3>Arun Shavinda</h3>
                    <span>Kandana, Sri Lanka</span>
                  </div>
                </div>
                <img src={user_1} alt="profile photo" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit delectus minima consectetur quod? Architecto eos
                  tenetur illo, fuga minima rerum corrupti perferendis harum?
                  Recusandae commodi vitae saepe atque ullam sapiente!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <div>
                    <h3>Ava Mora</h3>
                    <span>Kandana, Sri Lanka</span>
                  </div>
                </div>
                <img src={user_2} alt="profile photo" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit delectus minima consectetur quod? Architecto eos
                  tenetur illo, fuga minima rerum corrupti perferendis harum?
                  Recusandae commodi vitae saepe atque ullam sapiente!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <div>
                    <h3>Chaniru Shavinda</h3>
                    <span>Kandana, Sri Lanka</span>
                  </div>
                </div>
                <img src={user_3} alt="profile photo" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit delectus minima consectetur quod? Architecto eos
                  tenetur illo, fuga minima rerum corrupti perferendis harum?
                  Recusandae commodi vitae saepe atque ullam sapiente!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <div>
                    <h3>Arun Silva</h3>
                    <span>Kandana, Sri Lanka</span>
                  </div>
                </div>
                <img src={user_4} alt="profile photo" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit delectus minima consectetur quod? Architecto eos
                  tenetur illo, fuga minima rerum corrupti perferendis harum?
                  Recusandae commodi vitae saepe atque ullam sapiente!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
