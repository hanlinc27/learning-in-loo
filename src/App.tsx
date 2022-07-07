import React from "react";
import "leaflet/dist/leaflet.css";

import { TileLayer, ZoomControl, MapContainer } from "react-leaflet";
import "./App.css";
import DataBar from "./components/DataBar";
import MarkerData from "./data/index";
import styled from "styled-components";
import LocationMarker from "./components/LocationMarker";

const StyledMapTitle = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 72px;
  font-style: italic;
  font-weight: 700;
  line-height: 86px;
  letter-spacing: 0.05em;
  text-align: left;
  z-index: 500;
  position: absolute;
  left: 60%;
  top: 75%;
`;

function App() {
  const zoom = 15;
  const minZoom = 14.5;
  const maxZoom = 18;
  const zoomSnap = 0;
  const zoomDelta = 0.5;
  const currentLocation = { lat: 43.47029798502307, lng: -80.54188108280796 };

  return (
    <React.Fragment>
      <DataBar />
      <StyledMapTitle>learning in loo</StyledMapTitle>
      <MapContainer
        style={{ height: "75vh", width: "100wh" }}
        center={currentLocation}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        zoomSnap={zoomSnap}
        zoomDelta={zoomDelta}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/shaahana/cl52t02lq001914r7jeolcfkh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFubGluYzI3IiwiYSI6ImNsNTRlaWV2cTB5dDczZG50MHA2MG8yZ28ifQ.mxHouq0r6_sHsDylxZVNNg" />
        {MarkerData.map((marker, key) => (
          <LocationMarker key={key} marker={marker} />
        ))}
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </React.Fragment>
  );
}

export default App;
