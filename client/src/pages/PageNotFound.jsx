import React from "react"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div>
      <span>404 Not Found</span>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default PageNotFound
