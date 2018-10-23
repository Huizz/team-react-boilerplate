import { shallow } from 'enzyme';
import * as React from 'react';
import Home from './Home';

describe('Home component', () => {
  let wrapper: any;
  const mockLoginFunction = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Home login={mockLoginFunction} isLoggedIn={false} />);
  });

  it('should call the mock login function', () => {
    wrapper.find('Button').simulate('click');
    expect(mockLoginFunction.mock.calls.length).toBe(1);
  });

  it('should call login with email and password in the state as arguments', () => {
    wrapper
      .find('input[name="username"]')
      .simulate('change', { target: { name: 'username', value: 'Test user' } });

    wrapper
      .find('input[name="password"]')
      .simulate('change', { target: { name: 'password', value: 'Password' } });

    wrapper.find('Button').simulate('click');

    // this is the second time the mock function is being called
    expect(mockLoginFunction.mock.calls[1][0]).toBe('Test user');
    expect(mockLoginFunction.mock.calls[1][1]).toBe('Password');

  });
});
