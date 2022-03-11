import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../global/NanoFlex.js";

//Components
import { Header } from './header/Header';

const StyledHome = styled(NanoFlex)`
  background-color: ${(props) => props.theme.color.main.darkBlue};
`;

export class Home extends Component {
  render() {
    return (
      <StyledHome flexDirection="column" justifyContent="flex-start"  alignItems="flex-start">
        <Header />
        {/* <Body />
        <Footer /> */}
      </StyledHome>
    );
  }
}
