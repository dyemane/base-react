import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import styles from './Application.scss'

export class Application extends React.Component<IProps & IInjectedProps, {}> {
  render() {
    const { loggedIn, username, children } = this.props
    return (
      <div className={styles.root}>
        <div>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link>
          <Login />
          {loggedIn && `(${username})`}
        </div>
        {children}
      </div>
    )
  }
}

export default inject<IInjectedProps, IProps>((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  username: stores.authStore.username
}))(observer(Application))

interface IProps {
  children?: any
}

interface IInjectedProps {
  loggedIn: boolean
  username: string
}
