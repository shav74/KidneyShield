import React, { useContext } from "react"
import "./CSS/ArticlePage.css"
import { Context } from "../context/Context"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrums/Breadcrum"

const Article = () => {
  const { all_article } = useContext(Context)
  const { articleId } = useParams()

  if (all_article.length === 0) {
    return <div>Loading...</div>
  }

  const article = all_article.find((e) => e.id === Number(articleId))

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <>
      <Breadcrum />
      <div className="container">
        <div className="article-container">
          <h1>{article.title}</h1>
          <div className="article-image">
            <img src={article.image} alt="" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          <p>{article.summary}</p>
          <br />
        </div>
      </div>
    </>
  )
}

export default Article
