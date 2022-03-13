import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";
import Type from "../../../global/Typography.js";

//Components
import Button from "../../../global/buttons/Button.js";

//Images
import UserAvatar from "../../../../images/user-avatar.png";
import { ReactComponent as ExpandIco } from "../../../../images/icons/expand-ico.svg";
import FevrTokenLogo from "../../../../images/fevrtoken-header.png";
import RookieBadget from "../../../../images/badge_tier-1-rookie-season.png";
import ChampionshitBadget from "../../../../images/badge_tier-3-championship-winner-season.png";
import FirstEditionBadget from "../../../../images/badge_tier3-first-edition-drop.png";

const StyledUserProfile = styled(NanoFlex)`
  height: auto;
  z-index: 1;
  position: relative;
  .userProfile-wrapper {
    width: auto;
    .avatar-container {
      width: auto;
      position: relative;
      .avatar-wrapper {
        height: 200px;
        width: 200px;
        overflow: hidden;
        border-radius: 260px;
        background: rgba(255, 255, 255, 0.01);
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.3);
        border: 8px solid white;
        z-index: 1;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.01);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4), inset 0px 1px 2px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
      }
      .level-container {
        width: auto;
        height: auto;
        z-index: 1;
        position: absolute;
        bottom: 0;
        background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
        box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
        border-radius: 30px;
        padding: 11px 15px 7px 15px;
        h5 {
          text-transform: uppercase;
          font-size: 16px;
          color: ${(props) => props.theme.color.main.darkBlue};
        }
      }
    }
    .userName-container {
      margin-top: 15px;
      margin-bottom: 5px;
      h2 {
        background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
      }
    }
    .secondary-info-container {
      p {
        font-size: 13px;
        color: ${(props) => props.theme.color.main.green};
      }
      .icon-wrapper {
        margin-top: -5px;
        margin-left: 5px;
        width: 100%;
        cursor: pointer;
        height: 13px;
        width: 13px;
        transition: ${(props) => props.theme.transition};

        &:hover {
          transition: ${(props) => props.theme.transition};
          transform: scale(1.2);
        }
      }
    }
    .user-fevrs-info {
      width: auto;
      margin: 15px auto;
      .fevrs-info {
        width: auto;
        margin-right: 20px;
        .fevr-logo {
          width: 16px;
          height: auto;
          margin-right: 5px;
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
        .value-info {
          h6 {
            background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-transform: uppercase;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .joinedDate-wrapper {
      margin-bottom: 15px;
      h6 {
        text-transform: uppercase;
        opacity: 0.6;
        font-size: 10px;
      }
    }
    .user-badgets-list {
      .badget-item {
        margin-right: 14px;
        width: auto;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .user-rank-container {
      margin-top: 30px;
      .rank-block {
        width: auto;
        margin-right: 30px;
        padding-right: 30px;
        position: relative;
        .number-wrapper {
          margin-bottom: 5px;
          h4 {
            background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
            b {
              font-weight: 900;
            }
            em {
              font-size: 14px;
            }
          }
        }
        .legend-wrapper {
          height: 25px;
          max-width: 100px;
          h6 {
            text-align: center;
            text-transform: uppercase;
            background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }
        &:after {
          content: "";
          display: inline-flex;
          position: absolute;
          right: 0;
          height: 50px;
          width: 0px;
          background: rgba(48, 224, 111, 0.7);
          border: 1px solid rgba(48, 224, 111, 0.7);
          box-sizing: border-box;
          box-shadow: 0px 4px 4px #30e06f, 0px 3px 10px #30e06f;
        }
        &:last-child {
          margin-right: 0;
          padding-right: 0;
          &:after {
            display: none;
          }
        }
      }
    }
  }
  .buttons-container {
    width: auto;
    height: auto;
    position: absolute;
    top: 10px;
    right: 5vw;
    .button-block {
        width: auto;
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
  }
`;

export class UserProfile extends Component {
  render() {
    return (
      <StyledUserProfile flexDirection="column">
        <NanoFlex className="userProfile-wrapper" flexDirection="column">
          <NanoFlex className="avatar-container">
            <NanoFlex className="avatar-wrapper">
              <img src={UserAvatar} alt="user avatar" />
            </NanoFlex>
            <NanoFlex className="level-container">
              <Type.h5>
                <b>Level 42</b>
              </Type.h5>
            </NanoFlex>
          </NanoFlex>
          <NanoFlex className="userName-container">
            <Type.h2>
              <b>@CryptoWizard</b>
            </Type.h2>
          </NanoFlex>
          <NanoFlex className="secondary-info-container">
            <Type.p>
              <b>0x88…87E005DAd5</b>
            </Type.p>
            <NanoFlex className="icon-wrapper">
              <ExpandIco />
            </NanoFlex>
          </NanoFlex>
          <NanoFlex className="user-fevrs-info">
            <NanoFlex className="fevrs-info">
              <NanoFlex className="fevr-logo">
                <img src={FevrTokenLogo} alt="fervtoken" />
              </NanoFlex>
              <NanoFlex className="value-info">
                <Type.h6>
                  <b>127,812,000</b> OWNED
                </Type.h6>
              </NanoFlex>
            </NanoFlex>

            <NanoFlex className="fevrs-info">
              <NanoFlex className="fevr-logo">
                <img src={FevrTokenLogo} alt="fervtoken" />
              </NanoFlex>
              <NanoFlex className="value-info">
                <Type.h6>
                  <b>127,812,000</b> STAKED
                </Type.h6>
              </NanoFlex>
            </NanoFlex>
          </NanoFlex>
          <NanoFlex className="joinedDate-wrapper">
            <Type.h6>Joined October, 2021</Type.h6>
          </NanoFlex>
          <NanoFlex className="user-badgets-list">
            <NanoFlex className="badget-item">
              <img src={RookieBadget} alt="badget" />
            </NanoFlex>
            <NanoFlex className="badget-item">
              <img src={ChampionshitBadget} alt="badget" />
            </NanoFlex>
            <NanoFlex className="badget-item">
              <img src={FirstEditionBadget} alt="badget" />
            </NanoFlex>
          </NanoFlex>
          <NanoFlex className="user-rank-container">
            <NanoFlex className="rank-block" flexDirection="column">
              <NanoFlex className="number-wrapper">
                <Type.h4>
                  <b>
                    133 / 27500 <em>XP</em>
                  </b>
                </Type.h4>
              </NanoFlex>
              <NanoFlex className="legend-wrapper" alignItems="flex-start">
                <Type.h6>
                  <b>NEXT LEVEL</b>
                </Type.h6>
              </NanoFlex>
            </NanoFlex>
            <NanoFlex className="rank-block" flexDirection="column">
              <NanoFlex className="number-wrapper">
                <Type.h4>
                  <b>2346</b>
                </Type.h4>
              </NanoFlex>
              <NanoFlex className="legend-wrapper" alignItems="flex-start">
                <Type.h6>
                  <b>moments owned</b>
                </Type.h6>
              </NanoFlex>
            </NanoFlex>
            <NanoFlex className="rank-block" flexDirection="column">
              <NanoFlex className="number-wrapper">
                <Type.h4>
                  <b>Top 1%</b>
                </Type.h4>
              </NanoFlex>
              <NanoFlex className="legend-wrapper" alignItems="flex-start">
                <Type.h6>
                  <b>RANK</b>
                </Type.h6>
              </NanoFlex>
            </NanoFlex>
          </NanoFlex>
        </NanoFlex>
        <NanoFlex className="buttons-container">
          <NanoFlex className="button-block">
            <Button green label="Settings" />
          </NanoFlex>
          <NanoFlex className="button-block">
            <Button label="View Profile" />
          </NanoFlex>
        </NanoFlex>
      </StyledUserProfile>
    );
  }
}
