import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";
import Type from "../../../global/Typography.js";

//Components

//Images

const StyledAchievementProgress = styled(NanoFlex)`
  margin-bottom: 65px;
  .achievementType-wrapper {
    width: auto;
    .achievementType-img {
      width: 100px;
      height: 100px;
      img {
        width: 100px;
        height: 100%;
        object-fit: contain;
      }
      .svg {
        height: 60px;
        width: auto;
      }
    }
    .achievementType-wrapper {
      width: auto;
      .achievement-title {
        width: auto;
        h2 {
          background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
        }
        h6 {
          text-transform: uppercase;
          margin-left: 10px;
          margin-bottom: 5px;
        }
      }
      .achievement-legend {
        width: auto;
        margin-top: 9px;
        h6 {
          letter-spacing: normal;
        }
      }
    }
  }
  .progressBar-wrapper {
    position: relative;
    height: 42px;
    background: rgba(196, 196, 196, 0.01);
    box-shadow: inset 0px 19.8066px 28.4403px -18.283px rgba(255, 255, 255, 0.5), inset 0px 3.55503px 5.58648px -2.03145px #ffffff, inset 0px -41.6447px 34.5346px -32.5032px rgba(96, 68, 145, 0.3), inset 0px 49.7704px 50.7862px -24.3774px rgba(202, 172, 255, 0.3),
      inset 0px 2.03145px 9.14151px rgba(154, 146, 210, 0.3), inset 0px 0.507862px 20.3145px rgba(227, 222, 255, 0.2);
    backdrop-filter: blur(50.7862px);
    border-radius: 400px;
    padding: 10px;
    .progressBar {
      background: linear-gradient(180deg, #ffffff52 0%, rgba(0, 0, 0, 0) 100%);
      box-shadow: inset 0px 19.8066px 28.4403px -18.283px rgb(255 255 255 / 22%), inset 0px 3.55503px 5.58648px -2.03145px #ffffff2b, inset 0px -41.6447px 34.5346px -32.5032px rgb(96 68 145 / 30%), inset 0px 49.7704px 50.7862px -24.3774px rgb(202 172 255 / 30%),
        inset 0px 2.03145px 9.14151px rgb(154 146 210 / 30%), inset 0px 0.507862px 20.3145px rgb(227 222 255 / 20%);
      backdrop-filter: blur(50.7862px);
      transform: matrix(1, 0, 0, -1, 0, 0);
      border-radius: 400px;
      position: relative;
      .progress {
        position: absolute;
        width: ${(props) => props.width};
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 0px 0px 18.9113px #30e06f, 0px 0px 73.2115px #30e06f, inset 0px 0px 7.32115px rgba(49, 255, 156, 0.5);
        filter: blur(1.35px);
        border-radius: 400px;
        -webkit-animation: scale-in-hor-left 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        animation: scale-in-hor-left 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      }
      .completed {
        position: absolute;
        width: ${(props) => props.width};
        background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
        box-shadow: 0px -5px 50px #30e06f, inset 0px -10px 20px #11915a;
        filter: blur(1.35px);
        border-radius: 400px;
      }
      .clickable {
        cursor: pointer;
        background: linear-gradient(119.91deg, #e76af7 -18.1%, #a034ae 82.06%);
        box-shadow: 0px 10px 50px rgba(189, 57, 251, 0.5), 0px -5px 50px #a639fb, 0px 0px 20px #5a2361, inset 0px -10px 20px #581361;
        transition: ${(props) => props.theme.transition};

        &:hover {
          opacity: 0, 8;
          background: linear-gradient(80deg, #e76af7 16%, #a034ae 100%);
        }
      }
      .clickable ~ .progressValue {
        cursor: pointer;
        &:hover {
          transition: ${(props) => props.theme.transition};
          opacity: 0, 8;
          background: linear-gradient(80deg, #e76af7 16%, #a034ae 100%);
          box-shadow: 0px 10px 20px rgba(189, 57, 251, 0.5), 0px -5px 20px #a639fb, 0px 0px 20px #5a2361, inset 0px -10px 20px #581361;
          border-radius: 400px;
        }
      }
      .completed ~ .progressValue {
        h6 {
          color: white;
        }
      }
      .progressValue {
        transform: matrix(1, 0, 0, -1, 0, 0);
        z-index: 1;
        position: absolute;
        h6 {
          margin-top: 2px;
          color: #434343;
          text-transform: uppercase;
          mix-blend-mode: difference;
          letter-spacing: normal;
        }
      }
    }
  }

  .info-wrapper {
    margin-top: 10px;
    .xp-wrapper {
      h2 {
        background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      h5 {
        background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-transform: uppercase;
        margin-left: 5px;
        letter-spacing: normal;
      }
    }
    .text-wrapper {
      h5 {
        background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-left: 5px;
        letter-spacing: normal;
      }
    }
  }
  

  &:last-child {
    margin-bottom: 0;
  }

  @-webkit-keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
`;

const AchievementProgress = (props) => {
  return (
    <StyledAchievementProgress flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
      <NanoFlex className="achievementType-wrapper">
        <NanoFlex className="achievementType-img">
          <img className={props.svg ? "svg" : ""} src={props.img} alt="achievement" />
        </NanoFlex>
        <NanoFlex className="achievementType-wrapper" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <NanoFlex className="achievement-title" justifyContent="flex-start" alignItems="flex-end">
            <Type.h2>
              <b>{props.title}</b>
            </Type.h2>
            <Type.h6>
              <b>{props.level}</b>
            </Type.h6>
          </NanoFlex>
          <NanoFlex className="achievement-legend" justifyContent="flex-start" alignItems="flex-start">
            <Type.h6>{props.legend}</Type.h6>
          </NanoFlex>
        </NanoFlex>
      </NanoFlex>
      <NanoFlex className="progressBar-wrapper">
        <NanoFlex className="progressBar" justifyContent="flex-start">
          <NanoFlex className={`progress ${props.width === "100%" ? "completed" : ""} ${props.clickable ? "clickable" : ""}`} width={props.width}></NanoFlex>
          <NanoFlex className="progressValue">
            <Type.h6>
              <b>{props.progressValue}</b>
            </Type.h6>
          </NanoFlex>
        </NanoFlex>
      </NanoFlex>
      <NanoFlex className="info-wrapper">
        {props.xp && (
          <NanoFlex className="xp-wrapper">
            <Type.h2>
              <b>{props.xpValue}</b>
            </Type.h2>
            <Type.h5>
              <b>XP</b>
            </Type.h5>
          </NanoFlex>
        )}
        {!props.xp && (
          <NanoFlex className="text-wrapper">
            <Type.h5>
              <b>{props.text}</b>
            </Type.h5>
          </NanoFlex>
        )}
      </NanoFlex>
    </StyledAchievementProgress>
  );
};

AchievementProgress.defaultProps = {
  img: "",
  title: "",
  level: "",
  legend: "",
  width: "",
  progressValue: "",
  xpValue: "",
  test: "",
};

export default AchievementProgress;
