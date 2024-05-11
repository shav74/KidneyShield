import React, { useContext } from "react"
import "./ProductDisplay.css"

const ProductDisplay = (props) => {
  const { product } = props

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
        <br />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-category">
          <p>
            <span>Urgency: </span>
            {product.urgency}
          </p>
          <p>
            <span>Blood Type: </span>
            {product.bloodType}
          </p>
          <p>
            <span>Gender: </span>
            {product.gender}
          </p>
          <p>
            <span>Body Weight: </span>
            {product.bodyWeight}
          </p>
          <p>
            <span>Height: </span>
            {product.height}
          </p>
          <p>
            <span>Special Conditions: </span>
            {product.specialConditions}
          </p>
          <p>
            <span>Compatibility: </span>
            {product.compatibility}
          </p>
          <p>
            <span>Contact: </span>
            {product.contact}
          </p>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default ProductDisplay
