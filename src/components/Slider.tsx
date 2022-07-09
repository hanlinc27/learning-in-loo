import React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

// Slider enums for the slider type
export enum SliderType {
  TEMPERATURE = "Temperature",
  LIGHT = "Light",
}

// Custom range slider customization to adhere to design handoff documentation
// different customizations for the slider depending on if it's the temperature or the light slider
export const RangeSlider = styled(Slider)(
  ({ sliderType }: { sliderType: SliderType }) => ({
    height: 3,
    width: "100%",
    marginTop: 8,
    marginBottom: 8,
    "& .MuiSlider-thumb": {
      height: 30,
      width: 30,
      backgroundColor: "#fff",
      border: "1px solid #C2C1C1",
      "&:hover": {
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
      },
      "& .airbnb-bar": {
        height: 9,
        width: 1,
        backgroundColor: "#C2C1C1",
        marginLeft: 1,
        marginRight: 1,
        outline: "1px solid white",
      },
    },
    "& .MuiSlider-track": {
      height: 8,
      background: "transparent",
    },
    "& .MuiSlider-mark": {
      backgroundColor: "white",
      height: 8,
      width: 2,
      "&.MuiSlider-markActive": {
        opacity: 1,
        backgroundColor: "'currentColor'",
      },
    },
    "& .MuiSlider-rail": {
      opacity: 1,
      height: 8,
      background:
        sliderType === SliderType.TEMPERATURE
          ? "linear-gradient(89.99deg, #57BDF0 0%, #9FEDF7 18.56%, #CEF7D8 34.44%, #F0F7A0 54.04%, #F7E367 75.85%, #F77F2D 94.69%, #F6512B 105.91%)"
          : "linear-gradient(89.99deg, #FFFDF8 0%, #FEEAC9 25.93%, #FFD799 46.34%, #FFD186 54.04%, #FEC669 75.85%, #FEB73B 94.69%, #FDB120 105.91%);",
    },
  })
);

interface SliderThumbComponentProps extends React.HTMLAttributes<unknown> {}

// Custom slider thumb component where the user drags and interacts with it
export function SliderThumbComponent(props: SliderThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}
