import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import { UpperHeader } from './UpperHeader.js';

//Image
import HeaderBackground from '../../../../images/header-bck.png';

const StyledHeader = styled(NanoFlex)`
  background-image: url(${HeaderBackground}); 
  /* background-image: radial-gradient(circle, #8e1082, #7b1e80, #68257c, #562876, #452a6f, #392866, #2d265d, #232353, #191e47, #11183a, #0a122e, #040922); */
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(178deg,#009a375c 0%,#0D153E 13%,rgba(0,0,0,0) 100%);
    z-index:0;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    z-index:0;
  }
  
`;


export class Header extends Component {
  render() {
    return (
      <StyledHeader flexDirection="column" justifyContent="flex-start"  alignItems="flex-start">
        <UpperHeader />
      </StyledHeader>
    );
  }
}