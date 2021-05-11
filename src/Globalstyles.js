import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


:root {
  --fc: white;
  --fs-h1: 2.5rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;

  --clr-bg: linear-gradient(to right, #000428, #004e92);
  --clr-bor: white;
  --clr-btn-hov: hsla(360, 100%, 100%, 0.1);
}


*,
*::before,
*::after{
  box-sizing: border-box;
}

body {
  background: var(--clr-bg);
  font-family: 'Roboto', sans-serif;
  font-size: var(--fs-body);
  margin: 0;
  min-height: 100vh;
}

h1,h2,h3,p {
  color: var(--fc);
  line-height: 1;
  margin: 0;
}


h1{
  font-size: var(--fs-h1);
}

h2 {
  font-size: var(--fs-h2);
}
h3 {
  font-size: var(--fs-h3);
}

`;
