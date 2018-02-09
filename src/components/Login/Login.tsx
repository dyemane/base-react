import React from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Segment, Message, Form, Button, Header } from 'semantic-ui-react'
import styles from './Login.scss'

export class Login extends React.Component<IProps & IInjectedProps, IState> {
  state = { username: '', password: '' }
  componentDidMount() {
    const { logout, props: { user, match: { path } } } = this
    if (user && path === '/logout') {
      logout()
    }
  }
  render() {
    const { user } = this.props
    return (
      <div className={styles.root}>
        {user
          ? <div>You are already logged in.</div>
          : <Grid textAlign="center" verticalAlign="middle">
              <Grid.Column>
                <Header as="h2" color="teal" textAlign="center">
                  Log-in to your account
                </Header>
                <Form size="large" onSubmit={this.login}>
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

                    <Button
                      color="orange"
                      fluid
                      size="small"
                      onClick={this.login}
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href="#">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>}
      </div>
    )
  }
  login = e => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password).then(() => {
      this.props.history.push('/')
    })
  }
  logout = () => this.props.logout()
}

export default inject<IInjectedProps, IProps>((
  { auth: { user, login, logout } } /*, ownProps: IProps*/
) => ({
  user,
  login(username: string, password: string): Promise<void> {
    return login(username, password)
  },
  logout(): void {
    logout()
  }
}))(observer(Login))

interface IState {
  username: string
  password: string
}
interface IProps {
  children?: any
  history?: any
  match?: any
}
interface IInjectedProps {
  user?: string
  login?(username: string, password: string): Promise<void>
  logout?(): void
}
