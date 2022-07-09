import React from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";

import { RangeSlider, SliderThumbComponent, SliderType } from "./Slider";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  StyledContainer,
  StyledHeading,
  StyledBody,
  StyledHyphen,
} from "./StylingComponents";

// Temperature filter props interface to pass in setting min and max temperature
interface TemperatureFilterProps {
  setTemperature: (isSettingMinTemperature: boolean, tempVal: number) => void;
  minTemperature: number;
  maxTemperature: number;
  onOpen: () => void;
}
const TemperatureFilter = ({
  setTemperature,
  minTemperature,
  maxTemperature,
  onOpen,
}: TemperatureFilterProps) => {
  // The temperature slider is a range slider, so we need to set the min and max values to the min and max temperature values
  const handleChange = (event: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setTemperature(true, newValue[0] as number);
      setTemperature(false, newValue[1] as number);
    }
  };
  return (
    <StyledContainer>
      <Flex direction="row">
        <StyledHeading>Temperature Filter</StyledHeading>
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
