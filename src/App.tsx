import React from "react";
import "leaflet/dist/leaflet.css";
import markerIcon from "./assets/marker-icon.svg";
import {
  TileLayer,
  ZoomControl,
  MapContainer,
  Marker,
  Popup,
} from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";
import DataBar from "./components/DataBar";
import styled from "styled-components";

const TEMPORARY_E7_LOCATION = { lat: 43.470631, lng: -80.541382 };
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
  const zoom = 16.25;
  const minZoom = 14.5;
  const maxZoom = 18;
  const zoomSnap = 0;
  const zoomDelta = 0.5;
  const currentLocation = { lat: 43.471, lng: -80.543 };

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
        <ZoomControl position="bottomleft" />
        <Marker
          position={TEMPORARY_E7_LOCATION}
          icon={
            new Icon({
              iconUrl: markerIcon,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -35],
            })
          }
        >
          <Popup>
            A pretty info popup <br /> Will finish this later.
          </Popup>
        </Marker>
      </MapContainer>
    </React.Fragment>
  );
}

export default App;
