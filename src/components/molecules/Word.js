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
  border-bottom: 1px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fontFamilySecondary};
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
