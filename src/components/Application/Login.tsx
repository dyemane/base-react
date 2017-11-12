import * as React from 'react'
import { inject } from 'mobx-react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Login extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        {this.props.loggedIn
          ? <button onClick={this.logout}>Logout</button>
          : <button onClick={this.login}>Login</button>}
      </div>
    )
  }
  login = () => this.props.login()

  logout = () => this.props.logout()
}

export default inject((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  login(): void {
    stores.authStore.login('Test', '123123')
  },

  logout(): void {
    stores.authStore.logout()
  }
}))(Login)

interface IProps {
  loggedIn?: string
  children?: any
  login?(): void
  logout?(): void
}
