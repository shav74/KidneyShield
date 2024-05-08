import React, { useContext } from "react"
import "./CSS/ArticlePage.css"
import SubHero from "../components/SubHero/SubHero"
import { Context } from "../context/Context"
import { useParams } from "react-router-dom"

const Article = () => {
  const { all_article } = useContext(Context)
  const { articleId } = useParams()
  const article = all_article.find((e) => e.id === Number(articleId))
  console.log(article)

  return (
    <>
      <SubHero
        title={"Hello"}
        des={"ammo"}
        image={"https://via.placeholder.com/600x400/90"}
      />
      <div className="container">
        <div className="article-container">
          <img
            className="card-image"
            src="https://via.placeholder.com/600x400"
            alt="profile picture"
          />
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          <p>{article.summary}</p>
          <br />
          <button>save</button>
          <button>back to top</button>
          <button>like</button>
          <button>dislike</button>
          <button>report</button>
        </div>
      </div>
    </>
  )
}

export default Article
