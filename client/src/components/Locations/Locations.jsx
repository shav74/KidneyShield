import { useState } from "react"
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps"

const Locations = () => {
  const position = { lat: 7.87, lng: 80.77 }
  const [open, setOpen] = useState(null)

  const locations = [
    {
      id: 1,
      name: "CKDu Information and Research Centre",
      address: "University of kelaniya, 11300",
      telephone: "(123) 456-7890",
      website: "www.location1.com",
      position: { lat: 6.979312442460574, lng: 79.91538902340208 },
    },
    {
      id: 2,
      name: "Centre for Education, Research and Training on Kidney Diseases",
      address: "Clinical Research Building, B364, Peradeniya 20400",
      telephone: "0812396382",
      website: "www.location2.com",
      position: { lat: 7.272868544099573, lng: 80.59986993184081 },
    },
    {
      id: 3,
      name: "National Institute for Nephrology, Dialysis & Transplantation",
      address: "349 Jayantha Weerasekara Mawatha, Colombo 01000",
      telephone: "0112422335",
      website: "www.location2.com",
      position: { lat: 7.071464761990986, lng: 79.84408337635145 },
    },
    {
      id: 4,
      name: "Renal Care Treatment Unit-Teaching Hospital",
      address: "Teaching Hospital, Batticaloa போதனா வைத்தியசாலை, மட்டக்களப்பு",
      telephone: "0652222261",
      website: "www.location2.com",
      position: { lat: 7.831817816089651, lng: 81.58162727138254 },
    },
    {
      id: 5,
      name: "Ayurvedic Kidney Hospital - Medawachchiya",
      address: "HF2P+8XQ, A9, Medawachchiya",
      telephone: "0652222261",
      website: "www.location2.com",
      position: { lat: 8.685292925025136, lng: 80.51961070594892 },
    },
    {
      id: 6,
      name: "Kidney Transplant and Renal Care Unit",
      address: "William Gopallawa Mawatha, Kandy 20000",
      telephone: "0812222261",
      website: "https://nhkandy.org/",
      position: { lat: 7.357460002555825, lng: 80.63214553738901 },
    },
  ]

  return (
    <APIProvider apiKey={"AIzaSyBYA2IXUAp9sm6oIqTp4lZIOn0pD1a5yNw"}>
      <div style={{ height: "100vh" }}>
        <Map zoom={8} center={position} mapId={"4f7c667df01f3c0a"}>
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
