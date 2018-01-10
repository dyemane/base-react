import { observable, action/*, runInAction*/ } from 'mobx'

export class AuthStore {
  @observable username: string = null
  @observable loggedIn: boolean = false
  @observable errors: string[] = []

  @action
  async login(username: string, password: string): Promise<void> {
    this.errors = []
    if (username === '' || username.length < 3) {
      this.errors.push("Username can't be blank")
    }

    if (this.errors.length === 0) {
      console.log('logging in ', username, password)
      this.username = username
      this.loggedIn = true
    }
  }

  @action
  logout(): void {
    this.username = null
    this.loggedIn = false
  }
}

export default AuthStore
