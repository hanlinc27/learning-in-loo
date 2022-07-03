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
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
];

const LightFilter = () => {
  const [minLight, setMinLight] = React.useState(20);
  const [maxLight, setMaxLight] = React.useState(40);

  const handleChange = (event: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setMinLight(newValue[0] as number);
      setMaxLight(newValue[1] as number);
    }
  };
  return (
    <StyledContainer>
      <StyledHeading>Light Filter</StyledHeading>
      <StyledBody>
        The average brightness on a UW-affiliated space is 50%.
      </StyledBody>
      <RangeSlider
        marks={marks}
        sliderType={SliderType.LIGHT}
        onChange={handleChange}
        value={[minLight, maxLight]}
        components={{ Thumb: SliderThumbComponent }}
        getAriaLabel={(index: number) =>
          index === 0 ? "Minimum temperature" : "Maximum temperature"
        }
      />
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        <TextField
          size="small"
          id="min-light"
          fullWidth
          value={minLight}
          onChange={(e) => setMinLight(Number(e.target.value))}
          label="brightness level (%)"
        />
        <StyledHyphen>-</StyledHyphen>
        <TextField
          value={maxLight}
          size="small"
          fullWidth
          id="max-light"
          label="brightness level (%)"
          onChange={(e) => setMaxLight(Number(e.target.value))}
        />
      </Box>
    </StyledContainer>
  );
};

export default LightFilter;
