// src/components/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;600;700&display=swap');

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
    background-color: #0a192f;
    color: #ccd6f6;
    font-family: 'Inter', sans-serif;
    line-height: 1.7;
    padding: 2rem;  /* remove max-width and margin:auto */
  }

  /* rest of your styles... */
`;

export default GlobalStyle;
