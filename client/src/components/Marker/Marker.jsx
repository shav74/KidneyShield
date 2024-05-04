import React, { useState } from "react"

const Marker = ({ lat, lng, details }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMarkerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div onClick={handleMarkerClick}>
      <Marker lat={lat} lng={lng} />
      {isOpen && (
        <div>
          <h3>{details.name}</h3>
          <p>{details.address}</p>
        </div>
      )}
    </div>
  )
}

export default Marker
