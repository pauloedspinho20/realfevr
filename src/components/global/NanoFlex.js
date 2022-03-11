import styled from "styled-components";

const NanoFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : "row")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "center")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  align-content: ${(props) => (props.alignContent ? props.alignContent : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "auto")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  order: ${(props) => (props.order ? props.order : 0)};
`;

export default NanoFlex;

/*--- // Documentation // --- //

import NanoFlex from './../Nano/NanoFlex';

<NanoFlex
      flexDirection={'column'}
      flexWrap={'warp'}
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      alignContent={'flex-start'}
      width={'auto'}
      height={'auto'}
      minWidth={'auto'}
      minHeight={'auto'}
      maxWidth={'auto'}
      maxHeight={'auto'}
      margin={'8px'}
      padding={'8px'}
      order={0}
>
    {<Child Content>}
</NanoFlex>
*/
