import { types } from 'mobx-state-tree'

export enum USERTYPES {
  VIEWER = 0,
  ADMIN,
  CUSTOMER,
  PROVIDER
}

export const User = types
  .model('User', {
    id: types.identifier(types.number),
    name: types.string,
    email: types.string,
    phone: types.string,
    roles: types.optional(types.array(types.number), [])
  })
  .actions(self => ({
    hasRole(role) {
      return self.roles.indexOf(role) !== -1
    }
  }))

export const TESTUSER = {
  id: 1,
  name: 'test',
  email: 'test@test.com',
  phone: 'na',
  roles: [USERTYPES.CUSTOMER]
}

export const Auth = types
  .model('Auth', {
    user: types.maybe(User)
  })
  .views(self => ({
    get isLoggedIn() {
      return self.user !== null
    }
  }))
  .actions(self => ({
    async login(name, _) {
      const role =
        name === 'ann'
          ? USERTYPES.ADMIN
          : name === 'carol'
            ? USERTYPES.CUSTOMER
            : name === 'don' ? USERTYPES.PROVIDER : USERTYPES.VIEWER
      const userData = { ...TESTUSER, ...{ name, roles: [role] } }
      self.user = User.create(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return Promise.resolve()
    },
    logout() {
      self.user = null
      localStorage.removeItem('user')
    },
    hasRole(role): boolean {
      if (self.user && self.user.hasRole(role)) {
        return true
      }
      return false
    }
  }))
  .actions(self => ({
    afterCreate() {
      const userData = JSON.parse(localStorage.getItem('user'))
      if (userData) {
        self.user = User.create(userData)
      }
    }
  }))

export type IUser = typeof User.Type

export default Auth
