import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import styles from './Application.scss'
import { IUser } from 'models'

export class Application extends React.Component<IProps & IInjectedProps, {}> {
  render() {
    const { user, children } = this.props
    return (
      <Container className={styles.root}>
        <div>
          <Link to="/">Home</Link> |
          {user
            ? <Link to="/logout">Logout</Link>
            : <Link to="/login">Login</Link>}
          {user && `(${user.name})`}
        </div>
        {children}
      </Container>
    )
  }
}

export default inject<IInjectedProps, IProps>((stores: any) => ({
  user: stores.auth.user
}))(observer(Application))

interface IProps {
  children?: any
}

interface IInjectedProps {
  user?: IUser
}
