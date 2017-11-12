import { observable, action } from 'mobx'

export class AuthStore {
  @observable username: string = null
  @observable loggedIn: boolean = false

  @action
  login(username: string, password: string): void {
    this.username = username
    this.loggedIn = true
  }

  @action
  logout(): void {
    this.username = null
    this.loggedIn = false
  }
}

export default AuthStore
