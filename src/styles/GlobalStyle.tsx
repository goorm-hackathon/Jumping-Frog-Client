import * as styled from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: GmarketSansMedium;
    font-weight: 700;
  }
  #root {
    width: 412px;
    margin: 0 auto;
    /* padding: 0 16px; */
  }
`;

export default GlobalStyle;
