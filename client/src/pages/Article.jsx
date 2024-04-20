import React from "react"
import "./CSS/ArticlePage.css"
import SubHero from "../components/SubHero/SubHero"

const Article = ({ title, subTitile, summary, image }) => {
  return (
    <>
      <SubHero
        title={"Hello"}
        des={"ammo"}
        image={"https://via.placeholder.com/600x400/90"}
      />
      <div className="container">
        <div className="article-container">
          <h1>what to do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            beatae adipisci ab corporis non sapiente architecto voluptate qui,
            eaque omnis. Sapiente nostrum voluptas distinctio illum odit!
            Deleniti veniam neque vero!Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Saepe beatae adipisci ab corporis non sapiente
            architecto voluptate qui, eaque omnis. Sapiente nostrum voluptas
            distinctio illum odit! Deleniti veniam neque vero!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Saepe beatae adipisci ab
            corporis non sapiente architecto voluptate qui, eaque omnis.
            Sapiente nostrum voluptas distinctio illum odit! Deleniti veniam
            neque vero!
          </p>
          <h1>what to do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            beatae adipisci ab corporis non sapiente architecto voluptate qui,
            eaque omnis. Sapiente nostrum voluptas distinctio illum odit!
            Deleniti veniam neque vero!Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Saepe beatae adipisci ab corporis non sapiente
            architecto voluptate qui, eaque omnis. Sapiente nostrum voluptas
            distinctio illum odit! Deleniti veniam neque vero!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Saepe beatae adipisci ab
            corporis non sapiente architecto voluptate qui, eaque omnis.
            Sapiente nostrum voluptas distinctio illum odit! Deleniti veniam
            neque vero!
          </p>
          <h1>what to do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            beatae adipisci ab corporis non sapiente architecto voluptate qui,
            eaque omnis. Sapiente nostrum voluptas distinctio illum odit!
            Deleniti veniam neque vero!Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Saepe beatae adipisci ab corporis non sapiente
            architecto voluptate qui, eaque omnis. Sapiente nostrum voluptas
            distinctio illum odit! Deleniti veniam neque vero!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Saepe beatae adipisci ab
            corporis non sapiente architecto voluptate qui, eaque omnis.
            Sapiente nostrum voluptas distinctio illum odit! Deleniti veniam
            neque vero!
          </p>
          <img
            className="card-image"
            src="https://via.placeholder.com/600x400"
            alt="profile picture"
          />
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
