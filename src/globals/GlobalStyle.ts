import { createGlobalStyle } from "styled-components";
import { breakpoints } from "../constants";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    html {
      font-size: 62.5%;
      box-sizing: border-box;
    }
    /* Allow percentage-based heights in the application */
    html, body {
      height: 100%;
    }
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    *::selection {
      color: var(--color-2);
      background: var(--color-1);
    }
    body {
      font-size: 1.8rem;
      font-weight: 400;
      background-color: var(--color-2);
      color: var(--color-1);
      line-height: 1.7;
      font-family: var(--font-body), serif;
    }
    /*
    Typographic tweaks!
    Add accessible line-height
    Improve text rendering
    */
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    /*
    Improve media defaults
    */
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }
    /*
    Remove built-in form typography styles
    */
    input, button, textarea, select {
      font: inherit;
      color: inherit;
      border: none;
      outline: none;
      background: none;
    }

    img {
      z-index: -1 !important;
    }
    /*
    Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }
    /*
    Create a root stacking context
    */
    #root, #__next {
      isolation: isolate;
    }
    /*
    headings
    */
    h1, h2, h3, h4 {
      font-weight: 900;
      font-family: var(--font-heading);
    }

    h1 {
      font-size: 4rem;
      margin: 0.67em 0;
    }
    h2 {
      font-size: 2.8rem;
      margin: 0.75em 0;
    }
    h3 {
      font-size: 1.8rem;
    }
    h5 {
      font-size: 1.3rem;
    }
    h6 {
      font-size: 1rem;
    }

    /* buttons and links */
    button, a {
      border: 0;
      text-decoration: none;
      outline: 0;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        transition: all 0.2s ease-in-out;
      }
    }

    @media screen and (${breakpoints.tablet}) {
      h1 {
        font-size: 5rem;
      }

      h2 {
        font-size: 4.2rem;
      }
    }

    /* alerts */
    .alert__cont {
      align-items: flex-start !important;
      /* width: 100%; */
      width: 34rem;
      max-width: 100% !important;
      text-align: left !important;
      justify-content: flex-start !important;
      border-radius: 1.6rem !important;

      svg {
        height: 2.2rem;
        width: 2.2rem;
      }
    }

    .alert__cont div:nth-child(2) {
      justify-content: flex-start;
      display: flex;
      align-self: center;
      align-items: center;
      width: 100%;

      &>* {
        text-align: left;
      }
    }

    .alert__icon-cont {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border-radius: 50%;
      padding: 0.6rem;
      flex: 1 0 auto;
      /* color: #fff !important; */
    }

    .alert__icon-cont-success {
      background: var(--color-10);
      width: 4.8rem;
      height: 4.8rem;
    }

    .alert__icon-cont-error {
      background: var(--color-10);
      width: 4.8rem;
      height: 4.8rem;
    }

    .alert__success {
      background: var(--color-9) !important;
      color: var(--color-2) !important;
    }

    .alert__error {
      background: var(--color-9) !important;
      color: var(--color-2) !important;
    }

    div.go2072408551 {
      padding: 16px;
    }

    div.go3958317564 {
      font-size: 14px;
      line-height: 200%;
      margin: 0 16px;
    }

    div[role="presentation"] {
      z-index: 30000 !important;
    }
    .css-8ndowl {
      z-index: 99999484 !important;
    }
    .overflow-y {
      max-height: 500px;
      overflow-y: auto;
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
    }
`;

export default GlobalStyle;
