import React from 'react'
import Footer from './components/layouts/Footer'
import CssBaseline from '@material-ui/core/CssBaseline'

import routes from './routes'

export default () =>
  <>
    <CssBaseline/>
    { routes }
  </>
