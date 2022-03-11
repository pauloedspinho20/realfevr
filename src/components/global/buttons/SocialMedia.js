import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "..//NanoFlex.js";

//Images
import { ReactComponent as FacebookIco } from "../../../images/icons/facebook-ico.svg";
import { ReactComponent as InstagramIco } from "../../../images/icons/instagram-ico.svg";
import { ReactComponent as LinkedinIco } from "../../../images/icons/linkedin-ico.svg";
import { ReactComponent as TelegramIco } from "../../../images/icons/telegram-ico.svg";
import { ReactComponent as TwitterIco } from "../../../images/icons/twitter-ico.svg";
import { ReactComponent as YoutubeIco } from "../../../images/icons/youtube-ico.svg";

const StyledSocialMedia = styled(NanoFlex)`
  height: auto;
  width: auto;
  .icon-wrapper {
    text-decoration: none;
    margin-right: 20px;
    opacity: 0.8;
    transition: ${(props) => props.theme.transition};
    &:hover {
        opacity: 1;
        transition: ${(props) => props.theme.transition};
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export class SocialMedia extends Component {
  render() {
    return (
      <StyledSocialMedia>
        {/* TELEGRAM */}
        <a className="icon-wrapper" href="https://t.me/realfevrofficial" rel="noreferrer" target="_blank">
          <TelegramIco />
        </a>
        {/* TWITTER */}
        <a className="icon-wrapper" href="https://twitter.com/realfevr" rel="noreferrer" target="_blank">
          <TwitterIco />
        </a>
        {/* YOUTUBE */}
        <a className="icon-wrapper" href="https://www.youtube.com/c/realfevrtv" rel="noreferrer" target="_blank">
          <YoutubeIco />
        </a>
        {/* FACEBOOK */}
        <a className="icon-wrapper" href="https://www.facebook.com/RealFevr" rel="noreferrer" target="_blank">
          <FacebookIco />
        </a>
        {/* INSTAGRAM */}
        <a className="icon-wrapper" href="https://www.instagram.com/realfevr/" rel="noreferrer" target="_blank">
          <InstagramIco />
        </a>
        {/* LINKEDIN */}
        <a className="icon-wrapper" href="https://www.linkedin.com/company/realfevr/" rel="noreferrer" target="_blank">
          <LinkedinIco />
        </a>
      </StyledSocialMedia>
    );
  }
}
