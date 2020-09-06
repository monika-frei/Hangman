import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";

const StyledWrapper = styled.div`
  position: absolute;
  right: 200px;
  margin-left: 200px;
  border: 1px solid hsl(0, 0%, 60%);
  padding: 10px;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledSpan = styled.span`
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0 10px;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 2.4rem;
  font-family: "Walter Turncoat", cursive;
`;

const WrongLetters = ({ wrongLetters }) => {
  return (
    <>
      {wrongLetters.length > 0 && (
        <StyledWrapper>
          <Paragraph>Wrong letters:</Paragraph>
          {wrongLetters.map((letter) => (
            <StyledSpan key={letter}>{letter}</StyledSpan>
          ))}
        </StyledWrapper>
      )}
    </>
  );
};

export default WrongLetters;
