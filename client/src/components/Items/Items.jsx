import React from "react"
import "./Items.css"
import { Link } from "react-router-dom"

const items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          className="item-img"
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <div>
        <h2>{props.name}</h2>
        <div className="item-price-new">Blood Type :{props.bloodType}</div>
        <div className="item-price-old">Urgency : {props.urgency}</div>
      </div>
      <div className="item-prices">
        <p style={{ color: "grey" }}>Name: {props.name}</p>
        <p style={{ color: "grey" }}>Age: {props.age}</p>
      </div>
    </div>
  )
}

export default items
