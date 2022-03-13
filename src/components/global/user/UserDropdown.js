import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../NanoFlex.js";
import Type from "../Typography.js";

//Images

const StyledUserDropdown = styled(NanoFlex)`
  width: auto;
  height: auto;
  cursor: pointer;
  .main-content {
    width: 184px;
    background: linear-gradient(141.32deg, rgba(48, 224, 111, 0.2) 4.58%, rgba(17, 129, 57, 0.2) 122.96%);
    border: 1px solid rgba(48, 224, 111, 0.8);
    box-sizing: border-box;
    border-radius: 40px;
    padding: 5px 14px 5px 7px;
    transition: ${(props) => props.theme.transition};
    position: relative;
    .avatar-wrapper {
      height: 31px;
      width: 31px;
      overflow: hidden;
      border-radius: 60px;
      background: rgba(255, 255, 255, 0.01);
      box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.3);
      border: 2px solid white;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .user-name {
      margin: 0 8px;
      width: calc(100% - 58px);
      z-index: 1;
      p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .dropdown-btn {
      width: 12px;
      height: 12px;
      margin-bottom: 6px;
      z-index: 1;
      /* ARROW */
      .arrow {
        border: solid white;
        border-width: 0 2px 2px 0;
        padding: 3px;
      }

      .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
      /* END ARROW */
    }
    &:before {
      content: "";
      position: absolute;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 10px #30e06f;
      backdrop-filter: blur(15px);
      width: 100%;
      height: 100%;
      left: 0;
      border-radius: 40px;
      z-index: 0;
      transition: ${(props) => props.theme.transition};
    }
    &:hover {
      background: linear-gradient(100deg, rgba(48, 224, 111, 0.4) 4.58%, rgba(17, 129, 57, 0.3) 122.96%);
      transition: ${(props) => props.theme.transition};
      &:before {
        content: "";
        position: absolute;
        backdrop-filter: blur(10px);
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25), 0px 0px 15px #30e06f;
      }
    }
  }
`;

const UserDropdown = (props) => {
  return (
    <StyledUserDropdown>
      <NanoFlex className="main-content">
        <NanoFlex className="avatar-wrapper">
          <img src={props.avatar} alt="user avatar" />
        </NanoFlex>
        <NanoFlex className="user-name">
          <Type.p><b>{props.userName}</b></Type.p>
        </NanoFlex>
        <NanoFlex className="dropdown-btn">
          <i className="arrow down"></i>
        </NanoFlex>
      </NanoFlex>
    </StyledUserDropdown>
  );
};

UserDropdown.defaultProps = {
  avatar: "",
  userName: "",
};

export default UserDropdown;
