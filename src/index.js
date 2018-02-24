import { injectGlobal } from 'styled-components'

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }
`

import Layout from './index'

export { Layout }

