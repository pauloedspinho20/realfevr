import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "..//NanoFlex.js";
import Type from "../Typography";

//Images
import { ReactComponent as FootballIco } from "../../../images/icons/football-ico.svg";

const StylePlayFantasyButton = styled(NanoFlex)`
  width: auto;
  a {
    width: 100%;
    height: 100%;
    padding: 12px 12px 10px 12px;
    background: linear-gradient(169.98deg, #ffffff 33.75%, #6a84cb 184.73%);
    box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
    text-decoration: none;
    transition: ${(props) => props.theme.transition};
    .button-wrapper {
      opacity: 0.8;
      transition: ${(props) => props.theme.transition};
      p {
        padding-top: 2px;
        color: ${(props) => props.theme.color.main.darkBlue};
        text-transform: uppercase;
        b {
        }
      }
      .icon-wrapper {
        margin-left: 5px;
        width: auto;
        svg {
          path {
            stroke: ${(props) => props.theme.color.main.darkBlue};
          }
        }
      }
    }
  }
  &:hover {
    a {
        transition: ${(props) => props.theme.transition};
        background: linear-gradient(169.98deg, #ffffff 33.75%, #6a84cb 110%);
      .button-wrapper {
        opacity: 1;
        transition: ${(props) => props.theme.transition};
      }
    }
  }
`;

export class PlayFantasyButton extends Component {
  render() {
    return (
      <StylePlayFantasyButton>
        <a href="https://fantasy.realfevr.com/home" rel="noreferrer" target="_blank">
          <NanoFlex className="button-wrapper">
            <Type.p>
              <b>Play Fantasy</b>
            </Type.p>
            <NanoFlex className="icon-wrapper">
              <FootballIco />
            </NanoFlex>
          </NanoFlex>
        </a>
      </StylePlayFantasyButton>
    );
  }
}
