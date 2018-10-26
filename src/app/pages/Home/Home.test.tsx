import { mount } from 'enzyme';
import * as React from 'react';
import Home from './Home';

describe('Home component', () => {
  let wrapper: any;
  const mockLoginFunction = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Home redux_login={mockLoginFunction} redux_isLoggedIn={false} />);
  });

  it('should call the mock login function', () => {
    wrapper.find('Button').simulate('click');
    expect(mockLoginFunction.mock.calls.length).toBe(1);
  });

  it('should call login with email and password in the state as arguments', () => {
    wrapper
      .find('.loginForm__username')
      .simulate('change', { target: { name: 'username', value: 'Test user' } });

    wrapper
      .find('.loginForm__password')
      .simulate('change', { target: { name: 'password', value: 'Password' } });

    wrapper.find('Button').simulate('click');

    // this is the second time the mock function is being called
    expect(mockLoginFunction.mock.calls[1][0]).toBe('Test user');
    expect(mockLoginFunction.mock.calls[1][1]).toBe('Password');
  });
});
