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
    background-color: #f5f5f5;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  #root {
    width: 432px;
    height: 792px;
    margin: 0 auto;
    padding: 0 16px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    border-radius: 20px;
  }
`;

export default GlobalStyle;
