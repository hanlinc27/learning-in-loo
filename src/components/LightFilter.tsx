import React from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { RangeSlider, SliderThumbComponent, SliderType } from "./Slider";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  StyledContainer,
  StyledHeading,
  StyledBody,
  StyledHyphen,
} from "./StylingComponents";

// Marks to space apart the slider by 100 increments, ranging the scale from 0-600 Lux
const marks = [
  {
    value: 0,
  },
  {
    value: 100,
  },
  {
    value: 200,
  },
  {
    value: 300,
  },
  {
    value: 400,
  },
  {
    value: 500,
  },
];

// The data props that we pass in to the light slider has a callback function so that the location markers on the map can update
// with the relevent light level preferences
interface LightFilterProps {
  setLight: (isSettingMinLight: boolean, lightVal: number) => void;
  minBrightness: number;
  maxBrightness: number;
  onOpen: () => void;
}

const LightFilter = ({
  setLight,
  minBrightness,
  maxBrightness,
  onOpen,
}: LightFilterProps) => {
  // The light slider is a range slider, so we need to set the min and max values to the min and max brightness values
  const handleChange = (event: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setLight(true, newValue[0] as number);
      setLight(false, newValue[1] as number);
    }
  };
  // Return the light slider UI by leveraging the RangeSlider component
  return (
    <StyledContainer>
      <Flex direction="row">
        <StyledHeading>Light Filter</StyledHeading>
        <IconButton
          backgroundColor="white"
          onClick={onOpen}
          marginBottom="8px"
          marginLeft="8px"
          cursor="pointer"
          border="none"
          aria-label="Temperature Info"
          fontSize="16px"
          icon={<InfoOutlineIcon />}
        />
      </Flex>
      <StyledBody>
        The average brightness on a UW-affiliated space is 50%.
      </StyledBody>
      <RangeSlider
        max={600}
        marks={marks}
        sliderType={SliderType.LIGHT}
        onChange={handleChange}
        value={[minBrightness, maxBrightness]}
        components={{ Thumb: SliderThumbComponent }}
        getAriaLabel={(index: number) =>
          index === 0 ? "Minimum brightness" : "Maximum brightness"
        }
      />
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        <TextField
          size="small"
          id="min-light"
          fullWidth
          value={minBrightness}
          onChange={(e) => setLight(true, Number(e.target.value))}
          label="brightness level (in Lux)"
        />
        <StyledHyphen>-</StyledHyphen>
        <TextField
          value={maxBrightness}
          size="small"
          fullWidth
          id="max-light"
          label="brightness level (in Lux)"
          onChange={(e) => setLight(false, Number(e.target.value))}
        />
      </Box>
    </StyledContainer>
  );
};

export default LightFilter;
