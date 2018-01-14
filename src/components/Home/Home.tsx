import React from 'react'
import { inject, observer } from 'mobx-react'
import { List, Image } from 'semantic-ui-react'

export class Home extends React.Component<IProps & IInjectedProps, IState> {
  render() {
    return (
      <div>
        <List>
          {this.props.doctors.map(user => {
            return (
              <List.Item key={user.id}>
                <Image
                  avatar
                  src="https://cdn0.iconfinder.com/data/icons/people-groups/512/User_Male-512.png"
                />
                <List.Content>
                  <List.Header as="a">
                    {user.name}
                  </List.Header>
                  <List.Description>
                    <div>
                      <b>Email: </b>
                      {user.email}
                    </div>
                    <div>
                      <b>Site: </b>
                      {user.website}
                    </div>
                    <div>
                      <b>Phone: </b>
                      {user.phone}
                    </div>
                  </List.Description>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default inject<IInjectedProps, IProps>((stores: any) => ({
  loggedIn: stores.authStore.loggedIn,
  doctors: stores.doctors.doctors
}))(observer(Home))

interface IState {}
interface IProps {}
interface IInjectedProps {
  loggedIn: string
  doctors: any[]
}
