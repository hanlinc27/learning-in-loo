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

const TemperatureFilter = () => {
  const [minTemperature, setMinTemperature] = React.useState(20);
  const [maxTemperature, setMaxTemperature] = React.useState(40);

  const handleChange = (event: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setMinTemperature(newValue[0] as number);
      setMaxTemperature(newValue[1] as number);
    }
  };
  return (
    <StyledContainer>
      <StyledHeading>Temperature Filter</StyledHeading>
      <StyledBody>
        The average temperature on a UW-affiliated space is 23.9°C.
      </StyledBody>
      <RangeSlider
        sliderType={SliderType.TEMPERATURE}
        onChange={handleChange}
        value={[minTemperature, maxTemperature]}
        components={{ Thumb: SliderThumbComponent }}
        getAriaLabel={(index: number) =>
          index === 0 ? "Minimum temperature" : "Maximum temperature"
        }
      />
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        <TextField
          fullWidth
          size="small"
          id="min-temperature"
          value={minTemperature}
          onChange={(e) => setMinTemperature(Number(e.target.value))}
          label="min temperature (in °C)"
        />
        <StyledHyphen>-</StyledHyphen>
        <TextField
          fullWidth
          value={maxTemperature}
          size="small"
          id="max-temperature"
          label="max temperature (in °C)"
          onChange={(e) => setMaxTemperature(Number(e.target.value))}
        />
      </Box>
    </StyledContainer>
  );
};

export default TemperatureFilter;
