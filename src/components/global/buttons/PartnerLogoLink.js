import React from "react";
import styled from "styled-components";
import NanoFlex from "..//NanoFlex.js";
import Type from "../Typography.js";

const StyledPartnerLogoLink = styled(NanoFlex)`
  width: auto;
  height: auto;
  a {
    text-decoration: none;
    pointer-events: ${(props) => (props.disabled ? "none" : "unset")};
    transition: ${(props) => props.theme.transition};

    .img-wrapper {
        height: 50px;
        width: auto;
        img {
            width: auto;
            height: 100%;
            object-fit: contain;
        }
    }
    &:hover {
        opacity: .8;
        transition: ${(props) => props.theme.transition};

    }
  }
`;

const PartnerLogoLink = (props) => {
  return (
    <StyledPartnerLogoLink disabled={props.disabled}>
      <a href={props.link} rel="noreferrer" target="_blank">
        <NanoFlex className="img-wrapper">
          <img src={props.logo} alt={props.alt} />
        </NanoFlex>
      </a>
    </StyledPartnerLogoLink>
  );
};

PartnerLogoLink.defaultProps = {
  link: "",
  logo: "",
  alt: "",
};

export default PartnerLogoLink;
