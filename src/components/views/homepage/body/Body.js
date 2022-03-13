import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import { Menu } from "./Menu.js";
import AchievementsBlock from "./AchievementsBlock.js";

//Images

const StyledBody = styled(NanoFlex)``;

export class Body extends Component {
  render() {
    return (
      <StyledBody flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <Menu />
        <AchievementsBlock />
      </StyledBody>
    );
  }
}
