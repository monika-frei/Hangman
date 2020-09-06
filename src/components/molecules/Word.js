import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  width: 40px;
  height: 40px;
  align-self: center;
  text-align: center;
  margin: 0 10px;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 2.4rem;
  font-family: "Walter Turncoat", cursive;
`;

const Word = ({ word, correctLetters }) => {
  return (
    <StyledWrapper>
      {word.split("").map((letter, index) => (
        <StyledSpan key={index}>
          {correctLetters.includes(letter) ? letter : ""}
        </StyledSpan>
      ))}
    </StyledWrapper>
  );
};

export default Word;
