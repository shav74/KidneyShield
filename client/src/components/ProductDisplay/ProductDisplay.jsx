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
      </div>
      <div className="productdisplay-right">
        <h1>{product.listingName}</h1>
        <p className="productdisplay-right-category">
          <span>Category:</span>
          {product.name}
        </p>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Was: {product.bloodType}
          </div>
          <div className="productdisplay-right-price-new">
            Now: {product.urgency}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>

        <button
          onClick={() => {
            addToCart(product.id)
          }}
        >
          Contact
        </button>
      </div>
    </div>
  )
}

export default ProductDisplay
