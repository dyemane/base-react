import React from 'react'
import { inject, observer } from 'mobx-react'
import { List } from 'semantic-ui-react'

export class Provider extends React.Component<IProps & IInjectedProps, IState> {
  render() {
    return (
      <div>
        <List>
          <List.Header as="h1">Provider</List.Header>
          <List.Description>Description</List.Description>
        </List>
      </div>
    )
  }
}

export default inject<IInjectedProps, IProps>(({ auth: { user } }) => ({
  user
}))(observer(Provider))

interface IState {}
interface IProps {}
interface IInjectedProps {
  user: any
}
