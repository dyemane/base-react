import React from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Segment, Message, Form, Button, Header } from 'semantic-ui-react'

export class Login extends React.Component<IProps & IInjectedProps, IState> {
  state = { username: '', password: '' }
  render() {
    const { loggedIn } = this.props
    return loggedIn
      ? <button onClick={this.logout}>Logout</button>
      : this.LoginForm()
  }
  LoginForm() {
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={(_, data) =>
                    this.setState({ username: data.value })}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={(_, data) =>
                    this.setState({ password: data.value })}
                />

                <Button color="teal" fluid size="large" onClick={this.login}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
  login = () => {
    this.props.login(this.state.username, this.state.password).then(() => {
      this.props.history.push('/')
    })
  }
  logout = () => this.props.logout()
}

export default inject<IInjectedProps, IProps>((
  stores: any /*, ownProps: IProps*/
) => ({
  loggedIn: stores.authStore.loggedIn,
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
  history?: any
}
interface IInjectedProps {
  loggedIn?: string
  login?(username: string, password: string): Promise<void>
  logout?(): void
}
