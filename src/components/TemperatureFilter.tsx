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

interface TemperatureFilterProps {
  setTemperature: (isSettingMinTemperature: boolean, tempVal: number) => void;
  minTemperature: number;
  maxTemperature: number;
}
const TemperatureFilter = ({
  setTemperature,
  minTemperature,
  maxTemperature,
}: TemperatureFilterProps) => {
  const handleChange = (event: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setTemperature(true, newValue[0] as number);
      setTemperature(false, newValue[1] as number);
    }
  };
  return (
    <StyledContainer>
      <StyledHeading>Temperature Filter</StyledHeading>
      <StyledBody>
        The average temperature on a UW-affiliated study space is 24°C and the
        ideal for a classroom is 22°C.
      </StyledBody>
      <RangeSlider
        min={20}
        step={1}
        max={30}
        marks
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
          onChange={(e) => setTemperature(true, Number(e.target.value))}
          label="min temperature (in °C)"
        />
        <StyledHyphen>-</StyledHyphen>
        <TextField
          fullWidth
          value={maxTemperature}
          size="small"
          id="max-temperature"
          label="max temperature (in °C)"
          onChange={(e) => setTemperature(false, Number(e.target.value))}
        />
      </Box>
    </StyledContainer>
  );
};

export default TemperatureFilter;
