import { css } from '@emotion/core'
import { TTheme } from './themes/types'

export default ({ colors }: TTheme) => css`

// ! Start of reset
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// ! End of reset

body, html, #root {
  height: 100%;
}

* {
  box-sizing: border-box;
}

body {
  background: ${colors.base0};
  margin: 0;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${colors.base80};
  font-size: 16px;
}

button, input {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

button.ant-btn {
  box-shadow: none;
  text-shadow: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1, h2, h3, h4, h5, h6, b, strong {
  font-weight: 700;
  color: ${colors.base80};
}

a {
  text-decoration: none;
  color: ${colors.primary50};
}

a:hover {
  color: ${colors.primary40};
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table
}
.clearfix:after { clear: both }

.ReactModal__Body--open, .modal-provider-active {
  overflow: hidden;
}

.rdg-editor-container {
  z-index: 100 !important;
}
`
