import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import { SocialMedia } from "../../../global/buttons/SocialMedia";

//Images
import RealFevrLogo from "../../../../images/logos/realfevr-logo-white.svg";
import SimpleLink from "../../../global/buttons/SimpleLink.js";
import Type from "../../../global/Typography.js";

const StyledBottomFooter = styled(NanoFlex)`
  height: auto;
  padding: 60px 5vw 10px 5vw;
  z-index: 1;
  .aside-bottomFooter {
    .img-wrapper {
      height: 24px;
      width: auto;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .links-list-wrapper {
        width: auto;
        margin-bottom: 10px;
        .block-wrapper {
            width: auto; 
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .allrights-content {
        h6 {
            text-transform: uppercase;
        }
    }
  }
`;

export class BottomFooter extends Component {
  render() {
    return (
      <StyledBottomFooter justifyContent="space-between">
        <NanoFlex className="aside-bottomFooter" justifyContent="flex-start">
          <SocialMedia />
        </NanoFlex>
        <NanoFlex className="aside-bottomFooter">
          <NanoFlex className="img-wrapper">
            <img src={RealFevrLogo} alt="RealFevr" />
          </NanoFlex>
        </NanoFlex>
        <NanoFlex className="aside-bottomFooter" flexDirection="column" alignItems="flex-end">
          <NanoFlex className="links-list-wrapper">
            <NanoFlex className="block-wrapper">
              <SimpleLink smallText link="https://www.realfevr.com/privacy-policy" label="Privacy Policy" />
            </NanoFlex>
            <NanoFlex className="block-wrapper">
              <SimpleLink smallText link="https://www.realfevr.com/terms-conditions" label="Terms & Conditions" />
            </NanoFlex>
            <NanoFlex className="block-wrapper">
              <SimpleLink smallText link="https://www.realfevr.com/contacts" label="Contact" />
            </NanoFlex>
          </NanoFlex>
          <NanoFlex className="allrights-content" justifyContent="flex-end">
              <Type.h6>© 2022 REALFEVR · ALL RIGHTS RESERVED</Type.h6>
          </NanoFlex>
        </NanoFlex>
      </StyledBottomFooter>
    );
  }
}
