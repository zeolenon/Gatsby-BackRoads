import { createGlobalStyle } from 'styled-components';
import bcgImg from '../images/defaultBcg.jpeg';
import './font.css';

export default createGlobalStyle`

:root {
  --primaryColor: #3fd0d4;
  --mainWhite: #fff;
  --offWhite: #f7f7f7;
  --mainBlack: #222;
  --mainGrey: #ececec;
  --darkGrey: #afafaf;
  --mainTransition: all 0.3s linear;
  --mainSpacing: 4px;
  --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: Lato, sans-serif;
  color: var(--mainBlack);
  background: var(--mainWhite);
  line-height: 1.4;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Poppins, sans-serif;
  margin-bottom: 1.25rem;
  letter-spacing: var(--mainSpacing);
}
p {
  margin-bottom: 1.25rem;
}
a {
  text-decoration: none;
}
.defaultHero {
  min-height: calc(100vh - 62px);
  background: linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bcgImg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .gatsby-image-wrapper {
  max-height: 600px;
  box-shadow: var(--lightShadow);
} */

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

`;
