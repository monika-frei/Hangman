import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import Paragraph from "../atoms/Paragraph";

const StyledWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px 10px 0 0;
  margin: 0 auto;
  background-color: hsl(0, 0%, 60%);
  transition: transform 0.4s ease-in-out;

  ${(props) =>
    props.show &&
    css`
      transform: translate(-50%, -50px);
    `}
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.6rem;
  text-align: center;
  color: #080707;
`;

const Notification = ({ show }) => {
  return (
    <StyledWrapper show={show}>
      <StyledParagraph>You have already checked this letter!</StyledParagraph>
    </StyledWrapper>
  );
};

export default Notification;
