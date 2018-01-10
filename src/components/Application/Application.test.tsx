import React from 'react';
import { shallow } from 'enzyme';
import { Application } from './Application';
const props = {
  loggedIn: false,
  username: ''
}
describe('<Application />', () => {
  it('renders components', () => {
    const wrapper = shallow(<Application {...props} />);
    expect(wrapper.find(Application).length).toBe(0);
  });
});