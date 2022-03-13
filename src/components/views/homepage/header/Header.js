import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import { UpperHeader } from "./UpperHeader.js";
import { NavBar } from "./NavBar.js";
import { UserProfile } from "./UserProfile.js";

//Image
import HeaderBackground from "../../../../images/header-bck.png";

const StyledHeader = styled(NanoFlex)`
  height: auto;
  background-image: url(${HeaderBackground});
  position: relative;
  padding-bottom: 20px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(178deg, #009a375c 0%, #0d153e 13%, rgba(0, 0, 0, 0) 100%);
    z-index: 0;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #000103 0%, #0b0f29a6 23%, rgba(0, 0, 0, 0) 100%);
    z-index: 0;
  }
`;

export class Header extends Component {
  render() {
    return (
      <StyledHeader flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <UpperHeader />
        <NavBar />
        <UserProfile />
      </StyledHeader>
    );
  }
}
