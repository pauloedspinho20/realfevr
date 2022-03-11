import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "..//NanoFlex.js";
import Type from "../Typography";

//Images
import FevrTokenLogo from "../../../images/fevrtoken-header.png";

const StyledBuyFevr = styled(NanoFlex)`
  height: auto;
  width: auto;
  a {
    text-decoration: none;
    .button-wrapper {
      .img-wrapper {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        transition: ${(props) => props.theme.transition};
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      p {
        transition: ${(props) => props.theme.transition};
        b {
          text-transform: uppercase;
        }
      }
    }
    &:hover {
      .button-wrapper {
        .img-wrapper {
          transition: ${(props) => props.theme.transition};
          transform: rotate(-15deg) scale(1.1);
        }
        p {
          transition: ${(props) => props.theme.transition};
          color: ${(props) => props.theme.color.main.pink};
        }
      }
    }
  }
`;

export class BuyFevr extends Component {
  render() {
    return (
      <StyledBuyFevr>
        <a href="https://www.realfevr.com/buy-fevr" rel="noreferrer" target="_blank">
          <NanoFlex className="button-wrapper">
            <NanoFlex className="img-wrapper">
              <img src={FevrTokenLogo} alt="fervtoken" />
            </NanoFlex>

            <Type.p>
              <b>BUY $FEVR</b>
            </Type.p>
          </NanoFlex>
        </a>
      </StyledBuyFevr>
    );
  }
}
