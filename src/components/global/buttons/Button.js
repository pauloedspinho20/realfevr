import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "..//NanoFlex.js";
import Type from "../Typography";

//Images
import { ReactComponent as FootballIco } from "../../../images/icons/football-ico.svg";

const StyleButton = styled(NanoFlex)`
  width: auto;
  padding: 12px 12px 10px 12px;
  background: ${(props) => (props.green ? "linear-gradient(141.32deg, #30E06F 4.58%, #118139 122.96%)" : "linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%)")};
  box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
  text-decoration: none;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "unset")};
  .button-wrapper {
    opacity: 0.8;
    transition: ${(props) => props.theme.transition};
    h6 {
      font-size: 11px;
      padding-top: 2px;
      color:  ${(props) => (props.green ? props.theme.color.main.font : "black")};
      text-transform: uppercase;
    }
  }
  &:hover {
    transition: ${(props) => props.theme.transition};
    background: ${(props) => (props.green ? "linear-gradient(169.98deg, #30E06F 33.75%, #118139 110%)" : "linear-gradient(169.98deg, #ffffff 33.75%, #74857a 110%)")};

  }
`;

const Button = (props) => {
  return (
    <StyleButton green={props.green} disabled={props.disabled}>
      <NanoFlex className="button-wrapper">
        <Type.h6>
          <b>{props.label}</b>
        </Type.h6>
      </NanoFlex>
    </StyleButton>
  );
};

Button.defaultProps = {
  label: "",
};

export default Button;
