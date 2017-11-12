import * as React from 'react'
import { inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import Login from './Login'

export class Application extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link> | <Link to="/about">about</Link>
          {this.props.username &&
            <span>
              &nbsp;({this.props.username})
            </span>}
        </div>
        <div>
          <Login />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default inject((stores: any) => ({
  username: stores.authStore.username
}))(Application)

interface IProps {
  children?: any
  username?: string
}
