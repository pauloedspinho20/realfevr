import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";
import Type from "../../../global/Typography.js";

//Components
import PartnerLogoLink from "../../../global/buttons/PartnerLogoLink";

//Images
import Athena from "../../../../images/logos/partners/partner-logo-athena.png";
import Bepro from "../../../../images/logos/partners/partner-logo-bepro.png";
import BSC from "../../../../images/logos/partners/partner-logo-bsc.png";
import Clever from "../../../../images/logos/partners/partner-logo-clever.png";
import EmpowerSports from "../../../../images/logos/partners/partner-logo-empower-sports.png";
import FPF from "../../../../images/logos/partners/partner-logo-fpf.png";
import Gateio from "../../../../images/logos/partners/partner-logo-gateio.png";
import Growth from "../../../../images/logos/partners/partner-logo-growth.png";
import IBC from "../../../../images/logos/partners/partner-logo-ibc.png";
import IR21 from "../../../../images/logos/partners/partner-logo-ir21.png";
import iSportConnect from "../../../../images/logos/partners/partner-logo-isportconnect.png";
import Ladof from "../../../../images/logos/partners/partner-logo-ladof.png";
import LigaPortugal from "../../../../images/logos/partners/partner-logo-ligaportugal.png";
import MoonRockCapital from "../../../../images/logos/partners/partner-logo-moonrockcapital.png";
import MorningStar from "../../../../images/logos/partners/partner-logo-morningstar.png";
import PolkaStarter from "../../../../images/logos/partners/partner-logo-polkastarter.png";
import SafeLaunch from "../../../../images/logos/partners/partner-logo-safe-launch.png";
import Shilling from "../../../../images/logos/partners/partner-logo-shilling.png";
import Soccerex from "../../../../images/logos/partners/partner-logo-soccerex.png";
import SportMultimedia from "../../../../images/logos/partners/partner-logo-sportmultimedia.png";


const StyledOfficialPartners = styled(NanoFlex)`
  height: auto;
  width:80vw;
  z-index: 1;
  padding: 40px 0;
  .section-title {
      margin-bottom: 5px;
      h5 {
          text-transform: uppercase;
      }
  }
  .partner-wrapper {
    width: auto;
    height: auto;
    margin: 20px 25px;
  }
`;

export class OfficialPartners extends Component {
  render() {
    return (
      <StyledOfficialPartners flexDirection="column">
          <NanoFlex className="section-title">
              <Type.h5><b>Official Partners</b></Type.h5>
          </NanoFlex>
          <NanoFlex className="partners-list"flexWrap="wrap">
{/* Soccerex */}
<NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.soccerex.com/" logo={Soccerex} alt="Soccerex" />
        </NanoFlex>

        {/* Shilling */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.shilling.vc/" logo={Shilling} alt="Shilling" />
        </NanoFlex>

        {/* Growth */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="#" logo={Growth} alt="Growth" />
        </NanoFlex>

        {/* PolkaStarter */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://polkastarter.com/" logo={PolkaStarter} alt="PolkaStarter" />
        </NanoFlex>

        {/* MorningStar */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://morningstar.ventures/" logo={MorningStar} alt="MorningStar" />
        </NanoFlex>

        {/* MoonRockCapital */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.moonrockcapital.io/" logo={MoonRockCapital} alt="MoonRockCapital" />
        </NanoFlex>

        {/* SportMultimedia */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.sportmultimedia.pt/" logo={SportMultimedia} alt="SportMultimedia" />
        </NanoFlex>

        {/* IBC */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://ibcgroup.io/" logo={IBC} alt="IBC" />
        </NanoFlex>

        {/* SafeLaunch */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://safelaunch.io/" logo={SafeLaunch} alt="SafeLaunch" />
        </NanoFlex>

        {/* Ladof */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://ladof.pt/" logo={Ladof} alt="Ladof" />
        </NanoFlex>

        {/* LigaPortugal */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.ligaportugal.pt/pt/homepage/" logo={LigaPortugal} alt="LigaPortugal" />
        </NanoFlex>

        {/* iSportConnect */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.isportconnect.com/" logo={iSportConnect} alt="iSportConnect" />
        </NanoFlex>

        {/* FPF */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.fpf.pt/pt/" logo={FPF} alt="FPF" />
        </NanoFlex>

        {/* Bepro */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.bepro.network/" logo={Bepro} alt="Bepro" />
        </NanoFlex>

        {/* Clever */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://cleveradvertising.com/" logo={Clever} alt="Clever" />
        </NanoFlex>

        {/* Gateio */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.gate.io/pt" logo={Gateio} alt="Gateio" />
        </NanoFlex>

        {/* IR21 */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://ir21.capital/" logo={IR21} alt="IR21" />
        </NanoFlex>

        {/* EmpowerSports */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://empower-sports.com/?lang=pt-pt" logo={EmpowerSports} alt="EmpowerSports" />
        </NanoFlex>

        {/* BSC */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="https://www.bsc.news/" logo={BSC} alt="BSC" />
        </NanoFlex>

        {/* Athena */}
        <NanoFlex className="partner-wrapper">
          <PartnerLogoLink link="" logo={Athena} alt="Athena" />
        </NanoFlex>
          </NanoFlex>
        
      </StyledOfficialPartners>
    );
  }
}
