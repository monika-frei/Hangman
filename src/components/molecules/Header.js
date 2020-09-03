import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <Heading>HANGMAN</Heading>
      <Paragraph>Find hidden word! Enter a letter</Paragraph>
    </StyledWrapper>
  );
};

export default Header;
