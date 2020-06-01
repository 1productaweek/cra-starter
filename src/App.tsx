import React from 'react'
import { Router, Redirect, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import loadable from '@loadable/component'
import { ThemeProvider } from 'emotion-theming'
import analytics from './config/analytics'

const Page1 = loadable(() => import(/* webpackPrefetch: true */ './features/Page1'))
const Page2 = loadable(() => import(/* webpackPrefetch: true */ './features/Page2'))

const history = createBrowserHistory()
history.listen((location) => {
  analytics.page({
    path: location.pathname,
    search: location.search,
  })
})

function App () {
  return (
    <ThemeProvider theme={{}}>
      <Router history={history}>
        <h1>App</h1>
        <p>
          <Link to='/page1'>Page1</Link>
          <Link to='/page2'>Page2</Link>
        </p>
        <Redirect path='/' exact to='/page1' />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </Router>
    </ThemeProvider>
  )
}

export default App
