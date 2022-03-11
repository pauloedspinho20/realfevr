import React from "react";
import styled from "styled-components";
import NanoFlex from "..//NanoFlex.js";
import Type from "../Typography.js";

const StyledSimpleLink = styled(NanoFlex)`
  width: auto;
  height: auto;
  a {
    text-decoration: none;
    pointer-events: ${(props) => (props.disabled ? "none" : "unset")};
    .labelButton-wrapper {
      p {
        transition: ${(props) => props.theme.transition};
        text-transform: uppercase;
        font-weight: 700;
        font-size: ${(props) => (props.smallText ? "10px" : "initial")};
        em {
          margin-left: 5px;
          font-weight: normal;
        }
      }
    }
    &:hover {
      .labelButton-wrapper {
        p {
          transition: ${(props) => props.theme.transition};
          color: ${(props) => props.theme.color.main.green};
        }
      }
    }
  }
`;

const SimpleLink = (props) => {
  return (
    <StyledSimpleLink smallText={props.smallText} disabled={props.disabled}>
      <a href={props.link} rel="noreferrer" target="_blank">
        <NanoFlex className="labelButton-wrapper" alignItems="flex-end">
          <Type.p>{props.label}</Type.p>
          <Type.p>
            <em>{props.secondaryLabel}</em>
          </Type.p>
        </NanoFlex>
      </a>
    </StyledSimpleLink>
  );
};

SimpleLink.defaultProps = {
  link: "",
  label: "",
  secondaryLabel: "",
};

export default SimpleLink;
