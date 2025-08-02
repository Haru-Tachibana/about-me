// src/components/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --linen: #F0EAD2;
    --sage: #DDE5B6;
    --moss: #ADC178;
    --coffee: #A98467;
    --dark-olive: #6C584C;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--linen);  /* main background */
    color: #A98467;            /* default text color */
    font-family: fira-mono;
    line-height: 1.7;
    padding: 2rem;
  }

  main {
    padding-top: 80px;
  }
`;

export default GlobalStyle;
