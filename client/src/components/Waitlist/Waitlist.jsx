import React, { useEffect, useState } from "react"
import "./Waitlist.css"
import Items from "../Items/Items"

const NewCollections = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/waitlist")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .then((data) => console.log(data))
  }, [])

  return (
    <div className="waitlist">
      <h1>New Products</h1>
      <div className="collections">
        {item.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              age={item.age}
              listingName={item.listingName}
              bloodType={item.bloodType}
              urgency={item.urgency}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewCollections
