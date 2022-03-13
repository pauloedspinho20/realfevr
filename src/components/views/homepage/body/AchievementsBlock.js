import React, { Component } from "react";
import styled from "styled-components";
import NanoFlex from "../../../global/NanoFlex.js";

//Components
import AchievementProgress from "./AchievementProgress.js";
//Images
import CollectibleLegendary from "../../../../images/collectible-legendary.png";
import Diamond4 from "../../../../images/diamond4.svg";
import Diamond3 from "../../../../images/diamond3.svg";

const StyledAchievementsBlock = styled(NanoFlex)`
  padding: 80px 0 200px 0;
  .column {
    width: 35vw;
    margin-right: 100px;
    &:last-child {
      margin-right: 5vw;
    }
  }
`;

export default class AchievementsBlock extends Component {

  render() {
    return (
      <StyledAchievementsBlock>
        <NanoFlex className="column" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <AchievementProgress svg img={Diamond4} title="NFT Collector" level="level 1" legend="Collect a total of 25 NFTs in your wallet (minted)" progressValue="7 / 25" width="20%" xp xpValue="150"/>
          <AchievementProgress svg img={Diamond3} title="NFT Collector" level="level 1" legend="Collect a total of 25 NFTs in your wallet (minted)" progressValue="click to CLAIM REWARD" width="100%" clickable xp xpValue="150" />
        </NanoFlex>
        <NanoFlex className="column" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <AchievementProgress img={CollectibleLegendary} title="NFT Collector" level="level 1" legend="Collect a total of 25 NFTs in your wallet (minted)" progressValue="1122 / 2000" width="45%" text="Legendary Iker Casillas collectible"/>
          <AchievementProgress svg img={Diamond3} title="Trade Master" level="level 2" legend="Make $2000 selling and buying Moments in the marketplace" progressValue="COMPLETE & claimed" width="100%" xp xpValue="150" />
        </NanoFlex>
      </StyledAchievementsBlock>
    );
  }
}
