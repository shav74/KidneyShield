import React from "react"
import "./CSS/ArticlePage.css"

const Article = ({ title, subTitile, summary, image }) => {
  return (
    <div className="container">
      <div className="article-container">
        <title>Title Goes Here</title>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe beatae
          adipisci ab corporis non sapiente architecto voluptate qui, eaque
          omnis. Sapiente nostrum voluptas distinctio illum odit! Deleniti
          veniam neque vero!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe beatae
          adipisci ab corporis non sapiente architecto voluptate qui, eaque
          omnis. Sapiente nostrum voluptas distinctio illum odit! Deleniti
          veniam neque vero!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe beatae
          adipisci ab corporis non sapiente architecto voluptate qui, eaque
          omnis. Sapiente nostrum voluptas distinctio illum odit! Deleniti
          veniam neque vero!
        </p>
      </div>
    </div>
  )
}

export default Article
