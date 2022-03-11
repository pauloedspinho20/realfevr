import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../global/NanoFlex.js";

//Components
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

const StyledHome = styled(NanoFlex)`
  height: auto;
  background-color: ${(props) => props.theme.color.main.black};
`;

export class Home extends Component {
  render() {
    return (
      <StyledHome flexDirection="column" justifyContent="flex-start"  alignItems="flex-start">
        <Header />
        {/* <Body />
        */}
        <Footer /> 
      </StyledHome>
    );
  }
}
