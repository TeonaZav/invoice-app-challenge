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
  --red-color: #ec5757;
  --red-pale: #ff9797;
  --blue-grey-color1: #888eb0;
  --blue-grey-color2: #7e88c3;
  --light-blue-color: #dfe3fa;
  --color-orange: #FF8F00;
  --pale-orange: rgba(231, 198, 154, 0.200);
  --color-green: #33D69F;
  --pale-green: #88ceb723;
}
body {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100vw;
  font-family: "Manrope", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
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

.App {
  width: 100vw;
  margin: 0 auto;
  align-self: center;
}
.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  font-size: 1.3rem;
  line-height: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
  border-radius: 0.3rem;
  letter-spacing: 0.1rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  text-transform: uppercase;
}
.btn--full:link,
.btn--full:visited {
  background-color: #d87d4a;
  color: #fff;
}
.btn--full:hover,
.btn--full:active {
  background-color: #fbaf85;
  color: #fff;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
}
.full {
  z-index: 5000;
}
.hidden {
  visibility: hidden;
  opacity: 0;
}
h2 {
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
p {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
}
.flex-c-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
}
@media (min-width: 90em) {
  .flex-c-center {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    gap: 3rem;
  }
}
`;
export default GlobalStyles;
