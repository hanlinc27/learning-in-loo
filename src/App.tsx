import React from "react";
import "leaflet/dist/leaflet.css";

import { TileLayer, ZoomControl, MapContainer } from "react-leaflet";
import "./App.css";
import { markerData } from "./data/index";
import styled from "styled-components";
import LocationMarker from "./components/LocationMarker";
import TemperatureFilter from "./components/TemperatureFilter";
import LightFilter from "./components/LightFilter";
import { Box } from "@chakra-ui/react";

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
  top: 70vh;
`;
const StyledContainer = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function App() {
  const zoom = 15;
  const minZoom = 14.5;
  const maxZoom = 18;
  const zoomSnap = 0;
  const zoomDelta = 0.5;
  const currentLocation = { lat: 43.47029798502307, lng: -80.54188108280796 };
  const [minTemperature, setMinTemperature] = React.useState(20);
  const [maxTemperature, setMaxTemperature] = React.useState(30);
  const [minBrightness, setMinBrightness] = React.useState(0);
  const [maxBrightness, setMaxBrightness] = React.useState(600);

  const [filteredMarkerData, setFilteredMarkerData] =
    React.useState(markerData);

  const handleSetTemperature = (
    isSettingMinTemperature: boolean,
    tempVal: number
  ) => {
    if (isSettingMinTemperature) {
      setMinTemperature(tempVal);
    } else {
      setMaxTemperature(tempVal);
    }
  };

  const handleSetBrightness = (
    isSettingMinBrightness: boolean,
    lightVal: number
  ) => {
    if (isSettingMinBrightness) {
      setMinBrightness(lightVal);
    } else {
      setMaxBrightness(lightVal);
    }
  };

  React.useMemo(() => {
    setFilteredMarkerData([
      ...markerData.filter(
        (marker) =>
          marker.temperature >= minTemperature &&
          marker.temperature <= maxTemperature &&
          marker.brightness >= minBrightness &&
          marker.brightness <= maxBrightness
      ),
    ]);
  }, [minTemperature, maxTemperature, minBrightness, maxBrightness]);

  return (
    <React.Fragment>
      <StyledContainer>
        <TemperatureFilter
          setTemperature={handleSetTemperature}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
        />
        <LightFilter
          setLight={handleSetBrightness}
          minBrightness={minBrightness}
          maxBrightness={maxBrightness}
        />
      </StyledContainer>
      <StyledMapTitle>learning in loo</StyledMapTitle>
      <Box
        w="520px"
        top="85vh"
        fontSize="12px"
        background="white"
        padding="8px 16px"
        position="absolute"
        mt="24px"
        left="60%"
        zIndex="500"
      >
        Navigate our virtual University of Waterloo campus and learn about
        different learning spaces for SYDE students. Use the filters at the top
        of the page to target your ideal temperature and lighting environments.
        See the resulting recommended study spaces based on primary sensor data
        research gathered in S2022.
      </Box>
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
        {filteredMarkerData.map((marker, key) => (
          <LocationMarker key={key} marker={marker} />
        ))}
        <ZoomControl position="topright" />
      </MapContainer>
    </React.Fragment>
  );
}

export default App;
