import * as React from "react";
import { Marker, Popup } from "react-leaflet";
import { LocationData } from "../types";
import markerIcon from "../assets/marker-icon.svg";
import { Icon } from "leaflet";
import { Box, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  .leaflet-popup-content {
    width: auto !important;
    margin: 0px;
    border-radius: 10px;
  }

  .leaflet-popup-content-wrapper {
    padding: 0px;
  }

  .leaflet-popup-tip {
    display: none;
  }
`;
interface LocationMarkerProps {
  marker: LocationData;
}

const LocationMarker = ({ marker }: LocationMarkerProps) => {
  const {
    name,
    temperature,
    humidity,
    brightness,
    userSatisfaction,
    totalVotes,
    image,
    imageAlt,
    coordinates,
  } = marker;

  const currentLocation = {
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  };

  return (
    <Marker
      position={currentLocation}
      icon={
        new Icon({
          iconUrl: markerIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [0, -35],
        })
      }
    >
      <StyledPopup>
        <Box
          width="300px"
          height="390px"
          display="flex"
          borderWidth="1px"
          overflow="hidden"
          flexDirection="column"
        >
          <Image src={image} w="300px" h="150px" alt={imageAlt} width="446px" />
          <Box display="flex" flexDirection="column">
            <Text>{name}</Text>
            <Text>{`temperature: ${temperature} humidity: ${humidity}% brightness: ${brightness}`}</Text>
          </Box>
        </Box>
      </StyledPopup>
    </Marker>
  );
};

export default LocationMarker;
