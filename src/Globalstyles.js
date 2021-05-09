import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


:root {
  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;
}


*,
*::before,
*::after{
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(to right, #000428, #004e92);
  font-family: 'Roboto', sans-serif;
  font-size: var(--fs-body);
  
}

h1,h2,h3,p {
  line-height: 1;
  margin: 0;
  color: white;
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
