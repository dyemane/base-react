import React from 'react'
import { inject, observer } from 'mobx-react'
import { List, Image } from 'semantic-ui-react'

export class Customer extends React.Component<IProps & IInjectedProps, IState> {
  render() {
    return (
      <div>
        <List>
          <List.Header as="h1">Customer</List.Header>
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

export default inject<
  IInjectedProps,
  IProps
>(({ auth: { user }, doctors: { doctors } }) => ({
  user,
  doctors
}))(observer(Customer))

interface IState {}
interface IProps {}
interface IInjectedProps {
  user: any
  doctors: any[]
}
