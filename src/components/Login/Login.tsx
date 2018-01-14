import React from 'react'
import { inject, observer } from 'mobx-react'
import { Input, Button } from 'semantic-ui-react'

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
          <Input
            value={username}
            placeholder="username"
            onChange={(_, data) => this.setState({ username: data.value })}
          />
          <Input
            value={password}
            placeholder="password"
            onChange={(_, data) => this.setState({ password: data.value })}
            type="password"
          />
          <Button onClick={this.login}>Login</Button>
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
