import React from "react";
import styled from "styled-components";
import TemperatureFilter from "./TemperatureFilter";
import LightFilter from "./LightFilter";

const StyledContainer = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DataBar = () => {
  return (
    <StyledContainer>
      <TemperatureFilter />
      <LightFilter />
    </StyledContainer>
  );
};

export default DataBar;
