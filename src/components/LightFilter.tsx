import React from "react";

import { RangeSlider, SliderThumbComponent, SliderType } from "./Slider";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  StyledContainer,
  StyledHeading,
  StyledBody,
  StyledHyphen,
} from "./StylingComponents";

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

interface LightFilterProps {
  setLight: (isSettingMinLight: boolean, lightVal: number) => void;
  minBrightness: number;
  maxBrightness: number;
}

const LightFilter = ({
  setLight,
  minBrightness,
  maxBrightness,
}: LightFilterProps) => {
  const handleChange = (event: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setLight(true, newValue[0] as number);
      setLight(false, newValue[1] as number);
    }
  };
  return (
    <StyledContainer>
      <StyledHeading>Light Filter</StyledHeading>
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
