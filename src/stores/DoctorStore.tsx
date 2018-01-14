import { observable, action/*, runInAction*/ } from 'mobx'
/*import http from 'http'*/

export class DoctorStore {
  @observable doctors: any[] = []

  @action
  async fetchList() {
    this.doctors = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  }
}

export default DoctorStore
