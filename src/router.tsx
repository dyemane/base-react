import * as React from 'react'
import Application from './components/Application'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from './stores'

const AboutPage = () =>
  <div>
    This is an About Page <Link to="/home">Home</Link>
  </div>
const HomePage = () =>
  <div>
    This is an Home Page <Link to="/about">About</Link>
  </div>
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
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        <Application>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NoMatch} />
          </Switch>
        </Application>
      </Switch>
    </BrowserRouter>
  </Provider>

export default AppRouter
