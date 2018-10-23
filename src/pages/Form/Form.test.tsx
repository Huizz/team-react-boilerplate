import { shallow } from 'enzyme';
import * as React from 'react';

import Button from 'components/Button';
import Form from './Form';

describe('<Form />', () => {
    it('renders the Form component and its children', () => {
        const component = shallow(<Form />);
        expect(component.find(Form)).toBeTruthy();
        expect(component.find(Button)).toBeTruthy();
    });

    it('handle click events', () => {
        const component = shallow(<Form />);
        component.find(Button).simulate('click');
        expect(component.state('counter')).toBe(2);
        component.find(Button).simulate('click');
        component.find(Button).simulate('click');
        expect(component.state('counter')).toBe(4);
    });
});
