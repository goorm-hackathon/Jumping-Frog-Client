import * as styled from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
  }

  #root {
    width: 432px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;

export default GlobalStyle;
