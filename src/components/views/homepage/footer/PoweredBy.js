import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";
import Type from "../../../global/Typography.js";
//Components

//Images
import BinanceLogo from "../../../../images/logos/binance-logo.svg";


const StyledPoweredBy = styled(NanoFlex)`
  height: auto;
  width:auto;
  padding: 40px;
  z-index: 1;
  .logo-wrapper {
      width: 70px;
      height: auto;
      margin-bottom: 20px;
      img {
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  }
  .info-content {
      h5 {
          opacity: .8;
      }
  }
`;

export class PoweredBy extends Component {
  render() {
    return (
      <StyledPoweredBy flexDirection="column">
          <NanoFlex className="logo-wrapper">
              <img src={BinanceLogo} alt="Binance Smart Chain" />
          </NanoFlex>
          <NanoFlex className="info-content">
              <Type.h5>RealFevr is powered by Binance Smart Chain</Type.h5>
          </NanoFlex>
      </StyledPoweredBy>
    );
  }
}
