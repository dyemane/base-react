import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import styles from './Application.scss'

export class Application extends React.Component<IProps & IInjectedProps, {}> {
  componentDidMount() {
    this.props.fetchList()
  }
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

        <div>
          Doctors
          {this.props.doctors.map(user => {
            return (
              <div key={user.id}>
                {user.name}
              </div>
            )
          })}
        </div>

        {children}
      </div>
    )
  }
}

export default inject<IInjectedProps, IProps>((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  username: stores.authStore.username,
  /*doctors: stores.doctorStore.doctors,*/
  doctors: stores.doctors.doctors,
  fetchList(): void {
    /*stores.doctors.fetchList()*/
  }
}))(observer(Application))

interface IProps {
  children?: any
}

interface IInjectedProps {
  loggedIn: boolean
  username: string
  doctors: any[]
  fetchList(): void
}
