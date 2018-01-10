import React from 'react'
import { inject, observer } from 'mobx-react'

export class Login extends React.Component<IProps & IInjectedProps, IState> {
  state = { username: '', password: '' }
  render() {
    const { loggedIn, errors } = this.props
    const { username, password } = this.state
    return loggedIn
      ? <button onClick={this.logout}>Logout</button>
      : <div>
          <span className="errors">
            {errors.map(e =>
              <p key={Date.now()}>
                {e}
              </p>
            )}
          </span>
          <input
            value={username}
            placeholder="username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            value={password}
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
          />
          <button onClick={this.login}>Login</button>
        </div>
  }
  login = () => {
    this.props.login(this.state.username, this.state.password).then(() => {
      if (this.props.errors.length === 0) {
        this.setState({ username: '', password: '' })
      }
    })
  }
  logout = () => this.props.logout()
}

export default inject<IInjectedProps, IProps>((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  errors: stores.authStore.errors,
  login(username: string, password: string): Promise<void> {
    return stores.authStore.login(username, password)
  },
  logout(): void {
    stores.authStore.logout()
  }
}))(observer(Login))

interface IState {
  username: string
  password: string
}
interface IProps {
  children?: any
}
interface IInjectedProps {
  loggedIn?: string
  errors?: string[]
  login?(username: string, password: string): Promise<void>
  logout?(): void
}
