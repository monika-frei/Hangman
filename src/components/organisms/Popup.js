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
  box-shadow: 0 0 5px ${({ theme }) => theme.grey200};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.black};
`;
const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fontFamilySecondary};
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.grey200};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
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
