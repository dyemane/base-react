import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './Home'

const props = {
  loggedIn: 'Bob',
  doctors: []
}
describe('<Home />', () => {
  it('renders components', () => {
    const wrapper = shallow(<Home {...props} />)
    expect(wrapper.find(Home).length).toBe(0)
  })
})
