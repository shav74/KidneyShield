import React, { useContext, useEffect } from "react"
import { Context } from "../context/Context"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrums/Breadcrum"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay"
import DescriptionBox from "../components/DescriptionBox/DescriptionBox"
// import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(Context)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  console.log(product)

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      {/* <RelatedProducts /> */}
    </div>
  )
}

export default Product
