import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
`;

const Figure = ({ errors }) => {
  return (
    <StyledSvg height="250" width="200">
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {errors.length > 0 && <circle cx="140" cy="70" r="20" />}
      {errors.length > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
      {errors.length > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
      {errors.length > 3 && <line x1="140" y1="120" x2="160" y2="100" />}
      {errors.length > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
      {errors.length > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
    </StyledSvg>
  );
};

export default Figure;
