import * as React from "react";
import { Marker, Popup } from "react-leaflet";
import { LocationData } from "../types";
import markerIcon from "../assets/marker-icon.svg";
import { Icon } from "leaflet";
import {
  Divider,
  Box,
  Image,
  Text,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import temperatureLogo from "../assets/temperatureLogo.svg";
import humidityLogo from "../assets/humidityLogo.svg";
import brightnessLogo from "../assets/brightnessLogo.svg";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  .leaflet-popup-content {
    width: auto !important;
    margin: 0px;
    border-radius: 4px;
  }

  .leaflet-popup-content-wrapper {
    padding: 0px;
    border-radius: 4px;
  }

  .leaflet-popup-tip {
    display: none;
  }

  .leaflet-popup-close-button {
    margin: 8px !important;
    border-radius: 5px !important;
    color: white !important;
    background-color: #333333 !important;
  }
`;
interface LocationMarkerProps {
  marker: LocationData;
}

const SatisfactionScale = ({
  positive,
  neutral,
  negative,
  votes,
}: {
  positive: number;
  neutral: number;
  negative: number;
  votes: number;
}) => {
  return (
    <VStack
      alignItems="flex-start"
      backgroundColor="#F7F7F7"
      height="77px"
      p="12px"
      spacing="12px"
    >
      <HStack justifyContent="space-between">
        <Box
          height="12px"
          width="12px"
          fontFamily="Space Grotesk, sans-serif"
          backgroundColor="#EE5B42"
        />
        <Text
          fontFamily="Space Grotesk, sans-serif"
          color="#858181"
          fontSize="8px"
        >
          Uncomfortable
        </Text>
        <Box height="12px" width="12px" backgroundColor="#F4AF5A" />
        <Text
          fontFamily="Space Grotesk, sans-serif"
          color="#858181"
          fontSize="8px"
        >
          Some discomfort
        </Text>
        <Box height="12px" width="12px" backgroundColor="#41893B" />
        <Text
          fontFamily="Space Grotesk, sans-serif"
          color="#858181"
          fontSize="8px"
        >
          No discomfort
        </Text>
      </HStack>

      <Flex width="100%" direction="row">
        <Box
          backgroundColor="#EE5B42"
          height="24px"
          width={`${negative}%`}
          textAlign="center"
        >
          <Text
            fontFamily="Space Grotesk, sans-serif"
            color="white"
            fontSize="8px"
            marginBottom="4px"
          >
            {`${negative}%`}
          </Text>
        </Box>
        <Box
          textAlign="center"
          backgroundColor="#F4AF5A"
          height="24px"
          width={`${neutral}%`}
        >
          <Text
            fontFamily="Space Grotesk, sans-serif"
            color="white"
            fontSize="8px"
          >
            {`${neutral}%`}
          </Text>
        </Box>
        <Box
          textAlign="center"
          backgroundColor="#41893B"
          height="24px"
          width={`${positive}%`}
        >
          <Text
            fontFamily="Space Grotesk, sans-serif"
            color="white"
            fontSize="8px"
          >
            {`${positive}%`}
          </Text>
        </Box>
      </Flex>
      <Divider border="1px solid #C2C1C1" orientation="horizontal" />
      <Text
        fontFamily="Space Grotesk, sans-serif"
        fontSize="8px"
        color="#858181"
      >
        Total: {votes} Votes
      </Text>
    </VStack>
  );
};

const PopupEnvironmentalFactor = ({
  logoUrl,
  factor,
  value,
  ideal,
}: {
  logoUrl: string;
  factor: string;
  value: string;
  ideal: string;
}) => {
  return (
    <HStack>
      <Image src={logoUrl} w="10px" h="10px" alt={factor} />
      <Text
        fontFamily="Space Grotesk, sans-serif"
        fontSize="11px"
      >{`Current ${factor}: ${value}`}</Text>
      <Text
        fontFamily="Space Grotesk, sans-serif"
        fontSize="11px"
        color="#C2C1C1"
      >{` | Ideal: ${ideal}`}</Text>
    </HStack>
  );
};

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
          width="314px"
          height="420px"
          display="flex"
          borderWidth="1px"
          overflow="hidden"
          flexDirection="column"
        >
          <Image src={image} w="300px" h="127px" alt={imageAlt} width="446px" />
          <Box display="flex" flexDirection="column" p="20px">
            <Text
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="400px"
              fontSize="14px"
              lineHeight="120%"
            >
              {name}
            </Text>
            <PopupEnvironmentalFactor
              logoUrl={temperatureLogo}
              factor="temperature"
              value={`${temperature}°C`}
              ideal="22°C"
            />
            <PopupEnvironmentalFactor
              logoUrl={humidityLogo}
              factor="humidity"
              value={`${humidity}%`}
              ideal="50°C"
            />
            <PopupEnvironmentalFactor
              logoUrl={brightnessLogo}
              factor="brightness"
              value={`${brightness} Lux`}
              ideal="300 Lux"
            />
            <Text
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="400px"
              fontSize="14px"
              lineHeight="120%"
            >
              User Satisfaction
            </Text>
            <SatisfactionScale
              votes={totalVotes}
              positive={userSatisfaction.positive}
              neutral={userSatisfaction.neutral}
              negative={userSatisfaction.negative}
            />
          </Box>
        </Box>
      </StyledPopup>
    </Marker>
  );
};

export default LocationMarker;
