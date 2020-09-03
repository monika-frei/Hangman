import React from "react";
import styled from "styled-components";
import Header from "../components/molecules/Header";
import Input from "../components/atoms/Input";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
`;

const MainView = () => {
  return (
    <StyledWrapper>
      <Header />
      <Input maxLength="1" type="text" />
    </StyledWrapper>
  );
};

export default MainView;
