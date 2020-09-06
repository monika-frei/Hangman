import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";

const StyledContainer = styled.div`
  background-color: hsla(0, 0%, 60%, 0.8);
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 60px 100px;
  border-radius: 10px;
  box-shadow: 0 0 5px hsl(0, 0%, 90%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #080707;
`;
const StyledParagraph = styled(Paragraph)`
  font-size: 2.4rem;
  font-family: "Walter Turncoat", cursive;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 20px;
  background-color: hsl(0, 0%, 90%);
  border: none;
  border-radius: 5px;
  color: #080707;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Popup = ({ result, playAgain }) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledParagraph>{`You ${result}`}</StyledParagraph>
        <StyledButton onClick={playAgain}>Play Again!</StyledButton>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Popup;
