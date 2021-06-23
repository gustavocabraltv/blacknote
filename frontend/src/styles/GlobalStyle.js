import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }

  button { 
    cursor: pointer;
  }
  html,body,#root { 
    height: 100%;

  }
  body { 
    background: #e4e7ef;
    -webkit-font-smoothing: antiliased;
  }
  body, input, button, textarea{
    font-family: 'Roboto'
  }

  h1,h2,h3,h4,h5 { 
    font-family: 'Roboto', sans-serif;
  }
  ul, li {
    list-style :none ;

  }


`;
 
export default GlobalStyle;