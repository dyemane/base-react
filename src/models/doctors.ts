import { types } from 'mobx-state-tree'
import axios from 'axios'

export const Doctor = types.model('Doctor', {
    id: types.identifier(types.number),
    name: types.string,
})

const Doctors = types.model('Doctors', {
    doctors: types.optional(types.array(Doctor), [])
}).actions(self => ({
  addDoctor(doc) {
    self.doctors.push(doc)
  },
  setDoctors(doctors) {
    self.doctors = doctors
  }
})).actions(self => ({
  async fetchList() {
    const doctors = await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
    self.setDoctors(doctors)
  }
})).actions(self => ({
  afterCreate() {
    self.fetchList()
  }
}))

export default Doctors
