import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 1000s;
  -webkit-text-fill-color: var(--main-bg-color) !important;
}
:root {
  --main-bg-color: #f8f8fb;
  --card-color: #ffffff;
  --indigo-color: #7c5dfa;
  --indigo-color-pale: #9277ff;
  --blue-black-color1: #0c0e16;
  --blue-black-color2: #141625;
  --dark-blue-color: #1e2139;
  --dark-blue-pale: #252945;
  --header-bg-color: #373B53;
  --header-border-color: #494E6E;
  --red-color: #ec5757;
  --red-pale: #ff9797;
  --blue-grey-color1: #888eb0;
  --blue-grey-color2: #7e88c3;
  --light-blue-color: #dfe3fa;
  --light-blue-color2: #F9FAFE;
  
  --color-orange: #FF8F00;
  --pale-orange: rgba(231, 198, 154, 0.200);
  --color-green: #33D69F;
  --pale-green: #88ceb723;
}
body {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100vw;
  font-family: 'League Spartan', sans-serif;
  overflow-x: hidden !important;
  scroll-behavior: smooth;
  transition: background-color 0.5s ease;
}
/* custom scrollbar */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.123);
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.123);
}
::-webkit-scrollbar {
  width: 1rem;
  background-color: rgba(0, 0, 0, 0.123);
}
::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.116);
  background-color: white;
}



.pale {
    color: var(--blue-grey-color1);
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

.bold {
    color: var(--blue-black-color1);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }



@media (min-width: 90em) {

}
`;
export default GlobalStyles;
