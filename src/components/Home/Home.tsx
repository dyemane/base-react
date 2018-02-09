import React from 'react'
import { inject, observer } from 'mobx-react'
import { List } from 'semantic-ui-react'
import { USERTYPES, IUser } from 'models/auth'
import Customer from './Customer'
import Provider from './Provider'

export class Home extends React.Component<IProps & IInjectedProps, IState> {
  render() {
    const { hasRole } = this.props
    return (
      <div>
        <List>
          <List.Item>
            <List.Content>
              <List.Header as="a">ME</List.Header>
              <List.Description>
                {hasRole(USERTYPES.PROVIDER) && <Provider />}
                {hasRole(USERTYPES.CUSTOMER) && <Customer />}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default inject<IInjectedProps, IProps>((stores: any) => ({
  user: stores.auth.user,
  isLoggedIn: stores.auth.isLoggedIn,
  hasRole(role): boolean {
    return stores.auth.hasRole(role)
  }
}))(observer(Home))

interface IState {}
interface IProps {}
interface IInjectedProps {
  user?: IUser
  isLoggedIn: boolean
  hasRole(role): boolean
}
