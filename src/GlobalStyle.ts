import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --dark-bg: #CAE9FF;
    --bg: #2c2f33;
    --gray-400: #b6c9d6;
    --gray-500: #99aab5;
    --gray-800: #76838d;
    --white: #fff;
    --primary: #7289da;
    --light: #93a8f6;
    --secondary: #424551;
    --delete: #EB5757;
    --update:#84e92a;
  }

  body {
    background-color: var(--dark-bg);

    &::-webkit-scrollbar {
      width: 9px;
    }

    &::-webkit-scrollbar-thumb {
      height: 30%;
      background: var(--primary);
      border-radius: 10px;
    }
  }

  button {
    border: none;
    background-color: inherit;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
