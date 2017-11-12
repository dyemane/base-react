import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

export class AuthStore {
  @observable username: string = null
  @observable loggedIn: boolean = false

  constructor() {}

  @action
  login(username: string, password: string): void {
    console.log('login')
    this.username = username
    this.loggedIn = true
  }

  @action
  logout(): void {
    console.log('logout')
    this.username = null
    this.loggedIn = false
  }
}

export default AuthStore
