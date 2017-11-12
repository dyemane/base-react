import * as React from 'react'
import { inject } from 'mobx-react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Login extends React.Component<IProps, IState> {
  state = { username: '', password: '' }
  render() {
    return this.props.loggedIn
      ? <button onClick={this.logout}>Logout</button>
      : <div>
          <input
            value={this.state.username}
            placeholder="username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            value={this.state.password}
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
          />
          <button onClick={this.login}>Login</button>
        </div>
  }
  login = () => {
    this.props.login(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }
  logout = () => this.props.logout()
}

export default inject((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  login(username: string, password: string): void {
    stores.authStore.login(username, password)
  },
  logout(): void {
    stores.authStore.logout()
  }
}))(Login)

interface IState {
  username: string
  password: string
}
interface IProps {
  loggedIn?: string
  children?: any
  login?(username: string, password: string): void
  logout?(): void
}
