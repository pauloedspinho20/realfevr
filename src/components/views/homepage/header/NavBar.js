import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";
import Type from "../../../global/Typography.js";
//Components
import SimpleLink from "../../../global/buttons/SimpleLink";
import UserDropdown from "../../../global/user/UserDropdown.js";

//Images
import RealFevrLogo from "../../../../images/logos/realfevr-logo-horizontal.svg";
import UserAvatar from "../../../../images/user-avatar.png";

const StyledNavBar = styled(NanoFlex)`
  height: auto;
  padding: 60px 5vw;
  z-index: 1;
  .aside-navBar {
    .block-wrapper {
      width: auto;
      margin-right: 15px;
      .main-logo-wrapper {
        height: 56px;
        width: auto;
        max-width: 18vw;
        min-width: 200px;
        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          transition: ${(props) => props.theme.transition};
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
          &:hover {
              opacity: .8;
              transition: ${(props) => props.theme.transition};
          }
        }
      }
      .beta-label {
        width: auto;
        margin-left: 20px;
        height: auto;
        padding: 5px 3px 2px 7px;
        background: linear-gradient(119.91deg, #e76af7 -18.1%, #a034ae 82.06%);
        box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
        p {
          text-transform: uppercase;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export class NavBar extends Component {
  render() {
    return (
      <StyledNavBar justifyContent="space-between">
        <NanoFlex className="aside-navBar" justifyContent="flex-start">
          <NanoFlex className="block-wrapper">
            <NanoFlex className="main-logo-wrapper">
              <a href="/" rel="noreferrer">
                <img src={RealFevrLogo} alt="RealFevr" />
              </a>
            </NanoFlex>
            <NanoFlex className="beta-label">
              <Type.p>
                <b>Beta</b>
              </Type.p>
            </NanoFlex>
          </NanoFlex>
        </NanoFlex>
        <NanoFlex className="aside-navBar" justifyContent="flex-end">
          <NanoFlex className="block-wrapper">
            <SimpleLink link="https://www.realfevr.com/packs" label="Packs" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink link="https://www.realfevr.com/marketplace" label="Marketplace" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink link="https://staking.realfevr.com/challenges" label="Challenges" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink link="https://staking.realfevr.com/fevr" label="$Fevr" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink label="Learn" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink link="https://staking.realfevr.com/" label="Staking" />
          </NanoFlex>
          <NanoFlex className="blocK-wrapper">
              <UserDropdown avatar={UserAvatar} userName="CryptoWizard"/>
          </NanoFlex>
        </NanoFlex>
      </StyledNavBar>
    );
  }
}
