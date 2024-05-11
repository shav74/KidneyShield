import React, { useRef, useContext } from "react"
import "./Article-Slide.css"
import { Context } from "../../context/Context"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"

const ArticleSlide = ({ category }) => {
  const { all_article } = useContext(Context)

  if (all_article.length === 0) {
    return <div>Loading...</div>
  }

  const articles = all_article.filter((article) => {
    return article.category === category
  })

  //filtered articles
  console.log("filtered articles:", articles)

  if (articles.length === 0) {
    return <div>No articles found for the given category</div>
  }

  const slider = useRef()
  let tx = 0
  const isMobile = window.innerWidth <= 768
  const slideAmount = isMobile ? 8.45 : 25

  const slideFoward = () => {
    if (tx > -50) {
      tx -= slideAmount
    } else {
      tx = 0
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += slideAmount
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
          <ul ref={slider} style={category == "news" ? { width: "400%" } : {}}>
            {articles.map((article) => (
              <li key={article.id}>
                <a href={`/articles/${article.id}`}>
                  <div className="slide">
                    <div className="user-info">
                      <div>
                        <h3>{article.title}</h3>
                      </div>
                    </div>
                    <img src={article.image} alt="profile photo" />
                    <p>{article.summary}</p>
                  </div>
                </a>
              </li>
            ))}
            {articles.map((article) => (
              <li key={article.id}>
                <a href={`/articles/${article.id}`}>
                  <div className="slide">
                    <div className="user-info">
                      <div>
                        <h3>{article.title}</h3>
                      </div>
                    </div>
                    <img src={article.image} alt="profile photo" />
                    <p>{article.summary}</p>
                  </div>
                </a>
              </li>
            ))}
            {articles.map((article) => (
              <li key={article.id}>
                <a href={`/articles/${article.id}`}>
                  <div className="slide">
                    <div className="user-info">
                      <div>
                        <h3>{article.title}</h3>
                      </div>
                    </div>
                    <img src={article.image} alt="profile photo" />
                    <p>{article.summary}</p>
                  </div>
                </a>
              </li>
            ))}
            {articles.map((article) => (
              <li key={article.id}>
                <a href={`/articles/${article.id}`}>
                  <div className="slide">
                    <div className="user-info">
                      <div>
                        <h3>{article.title}</h3>
                      </div>
                    </div>
                    <img src={article.image} alt="profile photo" />
                    <p>{article.summary}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ArticleSlide
