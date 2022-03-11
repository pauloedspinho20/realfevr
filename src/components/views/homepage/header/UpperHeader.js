import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import SimpleLink from "../../../global/buttons/SimpleLink";
import { PlayFantasyButton } from "../../../global/buttons/PlayFantasyButton";
import { BuyFevr } from "../../../global/buttons/BuyFevr";
import { SocialMedia } from "../../../global/buttons/SocialMedia";


const StyledUpperHeader = styled(NanoFlex)`
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 150px;
  z-index: 1;
  .aside-upperHeader {
    width: auto;
    .block-wrapper {
      width: auto;
      margin-right: 40px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export class UpperHeader extends Component {
  render() {
    return (
      <StyledUpperHeader justifyContent="space-between">
        <NanoFlex className="aside-upperHeader">
          <BuyFevr />
        </NanoFlex>
        <NanoFlex className="aside-upperHeader">
          <NanoFlex className="block-wrapper">
            <SocialMedia />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink link="https://staking.realfevr.com/" label="Staking" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <SimpleLink disabled link="https://staking.realfevr.com/" label="NFT P2E Game" secondaryLabel="(Soon)" />
          </NanoFlex>
          <NanoFlex className="block-wrapper">
            <PlayFantasyButton />
          </NanoFlex>
        </NanoFlex>
      </StyledUpperHeader>
    );
  }
}
