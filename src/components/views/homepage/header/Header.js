import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import { TopBar } from './TopBar.js';

//Image
import HeaderBackground from '../../../../images/header-bck.png';

const StyledHeader = styled(NanoFlex)`
  
  background-image: url(${HeaderBackground}); 
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    z-index:-1;
  }
`;

export class Header extends Component {
  render() {
    return (
      <StyledHeader flexDirection="column" justifyContent="flex-start"  alignItems="flex-start">
        <TopBar />
      </StyledHeader>
    );
  }
}