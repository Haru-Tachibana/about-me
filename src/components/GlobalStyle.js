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
    background-color: #0a192f;   /* dark navy background */
    color: #ccd6f6;              /* soft light text */
    font-family: 'Inter', sans-serif;
    line-height: 1.7;
    max-width: 800px;
    margin: auto;
    padding: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #64ffda;              /* teal accent */
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    color: #8892b0;              /* muted text color */
  }

  a {
    color: #64ffda;              /* teal accent */
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
  }

  a::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #64ffda;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  a:hover::after {
    width: 100%;
  }

  code {
    font-family: 'Fira Mono', monospace;
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
