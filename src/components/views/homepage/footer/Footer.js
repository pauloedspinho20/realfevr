import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import { OfficialPartners } from "./OfficialPartners";
import { PoweredBy } from "./PoweredBy";
import { BottomFooter } from "./BottomFooter";

const StyledFooter = styled(NanoFlex)`
  position: relative;
  padding: 50px 0;
  &:after {
      content:"";
    position: absolute;
    bottom: 0;
    background: radial-gradient(133.75% 133.75% at 50% 104.01%, rgba(48, 224, 111, 0.6) 0%, rgba(38, 175, 87, 0.46875) 0%, rgba(0, 0, 0, 0) 60%);
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export class Footer extends Component {
  render() {
    return (
      <StyledFooter flexDirection="column">
        <OfficialPartners />
        <PoweredBy />
        <BottomFooter />
      </StyledFooter>
    );
  }
}
