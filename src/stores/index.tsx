import { Auth, Doctors } from '../models'

const auth = Auth.create()
const doctors = Doctors.create({}, auth)
const store = {
  auth,
  doctors
}
export default store
