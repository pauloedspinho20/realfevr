import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NanoFlex from "../../../global/NanoFlex.js";
import Type from "../../../global/Typography.js";

const StyledMenu = styled(NanoFlex)`
  height: auto;
  padding-top: 30px;
  border-bottom: 1px solid #ffffff80;
  .link {
    transition: ${(props) => props.theme.transition};
    text-decoration: none;
    opacity: 0.5;
    margin-right: 40px;

    h5 {
      text-transform: uppercase;
      background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transition: ${(props) => props.theme.transition};
      opacity: 1;
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      margin-top: 16px;
      background: transparent;
      /* box-shadow: 3px 7px 15px rgba(13, 21, 62, 0.4); */
    }
  }
  .current {
    transition: ${(props) => props.theme.transition};
    opacity: 1;
    pointer-events: none;
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      margin-top: 16px;
      background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
      box-shadow: 3px 7px 15px rgba(13, 21, 62, 0.4);
    }
  }
`;

export class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        <Link to="/collection" className="link" activeclassname="current">
          <Type.h5>
            <b>Collection</b>
          </Type.h5>
        </Link>
        <Link to="/transactions" className="link" activeclassname="current">
          <Type.h5>
            <b>Transaction</b>
          </Type.h5>
        </Link>
        <Link to="/" className="link current" activeclassname="current">
          <Type.h5>
            <b>Achievements</b>
          </Type.h5>
        </Link>
        <Link to="/rewards" className="link" activeclassname="current">
          <Type.h5>
            <b>Rewards</b>
          </Type.h5>
        </Link>
        <Link to="/notifications" className="link" activeclassname="current">
          <Type.h5>
            <b>Notifications</b>
          </Type.h5>
        </Link>
      </StyledMenu>
    );
  }
}
