import AuthStore from './AuthStore'
import DoctorStore from './DoctorStore'
import Doctors from '../models/doctors'
const store = {
  authStore: new AuthStore(),
  doctorStore: new DoctorStore(),
  doctors: Doctors.create(),
}
export default store
