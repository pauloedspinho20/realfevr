import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";
//import Type from "../../../global/Typography.js";

//Components
import { BuyFevr } from '../../../global/buttons/BuyFevr';

const StyledTopBar = styled(NanoFlex)`
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 150px;
  .aside-topBar {
      width: auto;
  }
`;

export class TopBar extends Component {
  render() {
    return (
      <StyledTopBar justifyContent="space-between">
        <NanoFlex className="aside-topBar">
          <BuyFevr />
        </NanoFlex>
        <NanoFlex className="aside-topBar"></NanoFlex>
      </StyledTopBar>
    );
  }
}
