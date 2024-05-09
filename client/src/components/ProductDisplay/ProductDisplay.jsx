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
        <h1>{product.listingName}</h1>
        <p className="productdisplay-right-category">
          <span>Urgency: </span>
          {product.urgency}
          <br />
          <br />
          <span>Blood Type: </span>
          {product.bloodType} <br />
          <span>Gender: </span>
          {product.geder} <br />
          <span>Body Weight: </span>
          {product.bodyWeight} <br />
          <span>Height: </span>
          {product.height} <br />
          <span>Special Conditions: </span>
          {product.specialConditions} <br />
          <span>Compatibility: </span>
          {product.compatibility} <br />
          <span>Contact: </span>
          {product.contact} <br />
        </p>
        <br />
        <br />
      </div>
    </div>
  )
}

export default ProductDisplay
