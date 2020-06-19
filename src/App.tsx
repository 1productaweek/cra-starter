import React from 'react'
import { Router, Redirect, Route, Link, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Loadable from 'react-loadable'
import { ThemeProvider } from 'emotion-theming'
import analytics from './config/analytics'

const Loading = () => <div>Loading...</div>
const Page1 = Loadable({ loading: Loading, loader: () => import(/* webpackPrefetch: true */ './features/Page1') })
const Page2 = Loadable({ loading: Loading, loader: () => import(/* webpackPrefetch: true */ './features/Page2') })

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
        <Switch>
          <Redirect path='/' exact to='/page1' />
          <Route path='/page1'>
            <Page1 />
          </Route>
          <Route path='/page2'>
            <Page2 />
          </Route>
        </Switch>

      </Router>
    </ThemeProvider>
  )
}

export default App
