import styled from "styled-components";

const h1 = styled.h1`
  color: ${(props) => props.theme.color.main.font};
  font-size: 56px;
  line-height: 62px;
  i {
    font-style: italic;
  }
  b,
  strong {
    font-weight: bold;
  }
`;

const h2 = styled.h2`
  color: ${(props) => props.theme.color.main.font};
  font-size: 34px;
  line-height: 36px;
  b,
  strong {
    color: ${(props) => props.theme.color.main.font};
    font-weight: bold;
  }
`;

const h3 = styled.h3`
  color: ${(props) => props.theme.color.main.font};
  font-size: 26px;
  line-height: 30px;
  b,
  strong {
    font-weight: bold;
  }
`;

const h4 = styled.h4`
  color: ${(props) => props.theme.color.main.font};
  font-size: 22px;
  line-height: 24px;
  b,
  strong {
    font-weight: bold;
  }
`;

const h5 = styled.h5`
  color: ${(props) => props.theme.color.main.font};
  font-size: 18px;
  letter-spacing: 0.2em;
  b,
  strong {
    font-weight: bold;
  }
`;

const h6 = styled.h6`
  color: ${(props) => props.theme.color.main.font};
  font-size: 12px;
  letter-spacing: 0.2em;
  i {
    font-style: italic;
  }
  b,
  strong {
    font-weight: bold;
  }
`;

const p = styled.p`
  color: ${(props) => props.theme.color.main.font};
  font-size: 14px;
  letter-spacing: 0.2em;
  i {
    font-style: italic;
  }
  b,
  strong {
    font-weight: bold;
  }
  em {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const Type = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
};

export default Type;

/*
Doc
import Type from './Global/Typography.js';

H1
<Type.h1>Teste <b>Teste Bold</b></Type.h1>

H2
<Type.h2>Teste <b>Teste Bold</b></Type.h2>

H3
<Type.h3>Teste <b>Teste Bold</b></Type.h3>

H4
<Type.h4>Teste <b>Teste Bold</b></Type.h4>

H5
<Type.h5>Teste <b>Teste Bold</b></Type.h5>

H6
<Type.h6>Teste <b>Teste Bold</b> <i>Teste Itálico</i> <i><b>Teste Itálico Bold</b></i></Type.h6>

P
<Type.p>Teste <b>Teste Bold</b> <i>Teste Itálico</i> <i><b>Teste Itálico Bold</b></i> <em>Teste EM</em></Type.p>

*/
