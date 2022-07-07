import React from "react";
import "leaflet/dist/leaflet.css";

import { TileLayer, ZoomControl, MapContainer } from "react-leaflet";
import "./App.css";
import { markerData } from "./data/index";
import styled from "styled-components";
import LocationMarker from "./components/LocationMarker";
import TemperatureFilter from "./components/TemperatureFilter";
import LightFilter from "./components/LightFilter";
import { SliderType } from "./components/Slider";
import { Dialog, DialogContent } from "@mui/material";

import { Box, Text, Image, HStack, CloseButton } from "@chakra-ui/react";
import {
  lightDescriptionInfo,
  lightSlider,
  temperatureSlider,
} from "./assets/index";

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
  const [isTemperatureModalOpen, setIsTemperatureModalOpen] =
    React.useState(false);
  const [isLightModalOpen, setIsLightModalOpen] = React.useState(false);

  const onOpen = (type: SliderType) =>
    type === SliderType.TEMPERATURE
      ? setIsTemperatureModalOpen(true)
      : setIsLightModalOpen(true);

  const handleClose = (type: SliderType) =>
    type === SliderType.TEMPERATURE
      ? setIsTemperatureModalOpen(false)
      : setIsLightModalOpen(false);

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
          onOpen={() => onOpen(SliderType.TEMPERATURE)}
          setTemperature={handleSetTemperature}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
        />
        <LightFilter
          onOpen={() => onOpen(SliderType.LIGHT)}
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
      <Dialog
        open={isTemperatureModalOpen}
        onClose={() => handleClose(SliderType.TEMPERATURE)}
      >
        <DialogContent>
          <Box display="flex" flexDirection="column">
            <HStack justifyContent="space-between">
              {" "}
              <Text fontSize="14px" fontFamily="Space Grotesk, sans-serif">
                What is a temperature filter?
              </Text>
              <CloseButton
                backgroundColor="white"
                border="none"
                cursor="pointer"
                onClick={() => handleClose(SliderType.TEMPERATURE)}
              />
            </HStack>
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              This temperature filter presents the physical quantity of
              temperature which expresses how hot or cold something is. The
              filter below has a lower bound of 20°C and an upper bound of 30°C.
              Based on the current measurements, most UW buildings have a
              temperature between 22-26°C. Leverage the temperature filter to
              determine study spaces that fulfil your ideal temperature
              requirements.
            </Text>
            <Image src={temperatureSlider} />
            <Text fontSize="14px" fontFamily="Space Grotesk, sans-serif">
              How did we obtain these temperature values?
            </Text>
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              Through taking sensor measurements over X period of time across
              various rooms SYDE students frequent, we determined an average
              temperature associated with each location. This temperature was
              measured in the morning, afternoon, and evening with limied
              variability.
            </Text>
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isLightModalOpen}
        onClose={() => handleClose(SliderType.LIGHT)}
      >
        <DialogContent>
          <Box display="flex" flexDirection="column">
            <HStack justifyContent="space-between">
              {" "}
              <Text fontSize="14px" fontFamily="Space Grotesk, sans-serif">
                What is a light filter?
              </Text>
              <CloseButton
                backgroundColor="white"
                border="none"
                cursor="pointer"
                onClick={() => handleClose(SliderType.LIGHT)}
              />
            </HStack>
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              This light filter presents light as a Lux value and allows users
              to define their ideal light levels as a function of Lux (not
              considering that light perception is also affected by the colour
              of light, room layout, etc).
            </Text>
            <Image src={lightSlider} />
            <Text fontSize="14px" fontFamily="Space Grotesk, sans-serif">
              What is a Lux and what are recommended Lux values?{" "}
            </Text>
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              A Lux is the measurement of actual light available at a certain
              distance from the light source [1]. The Illuminating Engineering
              Society (IES), an accredited Standards Development Organization in
              America recommends a lighting level of 500-1000 Lux [2] for rooms
              with “difficult reading and writing” which is higher than the
              typical lighting in measured UW study spaces.
            </Text>
            <Image src={lightDescriptionInfo} />
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              Source[3]{" "}
            </Text>
            <Text fontSize="14px" fontFamily="Space Grotesk, sans-serif">
              How did we obtain these values?{" "}
            </Text>
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              Through taking sensor measurements over X period of time across
              various rooms SYDE students frequent, we determined an average Lux
              value associated with each location.
            </Text>
            <Text fontSize="12px" fontFamily="Space Grotesk, sans-serif">
              Sources: [1] Shedding light on Lumens, lux and latitude. CineD.
              (2016, January 29). Retrieved July 6, 2022, from
              https://www.cined.com/shedding-light-lumens-lux-latitude/ [2]
              Carrington, M. (2022, June 29). IES. Illuminating Engineering
              Society. Retrieved July 6, 2022, from https://www.ies.org/ [3]
              Haynes, R. (2020, May 20). The relationship between Lux, lumen and
              watt. TACHYON Light. Retrieved July 6, 2022, from
              https://tachyonlight.com/the-relationship-between-lux-lumen-and-watt/
            </Text>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default App;
