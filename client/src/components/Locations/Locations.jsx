import { useState } from "react"
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps"

const Locations = () => {
  const position = { lat: 53.54, lng: 10 }
  const [open, setOpen] = useState(null)

  const locations = [
    {
      id: 1,
      name: "Location 1",
      address: "123 Main St, Anytown, USA",
      telephone: "(123) 456-7890",
      website: "www.location1.com",
      position: { lat: 53.54, lng: 10 },
    },
    {
      id: 2,
      name: "Location 2",
      address: "456 Elm St, Othertown, USA",
      telephone: "(987) 654-3210",
      website: "www.location2.com",
      position: { lat: 53.8, lng: 10 },
    },
  ]

  return (
    <APIProvider apiKey={"AIzaSyBYA2IXUAp9sm6oIqTp4lZIOn0pD1a5yNw"}>
      <div style={{ height: "100vh" }}>
        <Map zoom={9} center={position} mapId={"4f7c667df01f3c0a"}>
          {locations.map((location) => (
            <>
              <AdvancedMarker
                position={location.position}
                onClick={() => setOpen(location.id)}
              >
                <Pin background={"red"} />
              </AdvancedMarker>
              {open == location.id && (
                <InfoWindow
                  position={location.position}
                  onClose={() => setOpen(null)}
                  style={{
                    padding: "5px",
                    background: "white",
                    borderRadius: "5px",
                  }}
                >
                  <div>
                    <h1>{location.name}</h1>
                    <p>address : {location.address}</p>
                    <p>tele : {location.telephone}</p>
                    <p>
                      website :{" "}
                      <a href={location.website}>{location.website}</a>
                    </p>
                  </div>
                </InfoWindow>
              )}
            </>
          ))}
        </Map>
      </div>
    </APIProvider>
  )
}

export default Locations
