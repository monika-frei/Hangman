import React from "react";
import styled from "styled-components";
import Header from "../components/molecules/Header";
import GameContainer from "../components/organisms/GameContainer";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080707;
`;

const MainView = () => {
  return (
    <StyledWrapper>
      <Header />
      <GameContainer />
    </StyledWrapper>
  );
};

export default MainView;
