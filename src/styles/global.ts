import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --background-container: #252d4a;

    --red: #e52e4d;
    --green: #33cc95;
  }

  * {
    margin: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 1080px) {
      font-size: 87.5%;      
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;