import * as React from 'react'
import Application from './components/Application'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from './stores'
import Home from './components/Home'
import Login from './components/Login'

const NoMatch = ({ location }: any) =>
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
    <div>
      Go <Link to="/">Home</Link>
    </div>
  </div>
const AppRouter = () =>
  <BrowserRouter>
    <Provider {...stores}>
      <Switch>
        <Application>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Application>
      </Switch>
    </Provider>
  </BrowserRouter>

export default AppRouter
