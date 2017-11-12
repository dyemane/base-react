import * as React from 'react'
import { inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import Login from './Login'
/*import styles from './Application.scss'*/

export class Application extends React.Component<IProps, {}> {
  render() {
    const { loggedIn, username, children } = this.props
    return (
      <div>
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

export default inject((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  username: stores.authStore.username
}))(Application)

interface IProps {
  children?: any
  loggedIn?: boolean
  username?: string
}
