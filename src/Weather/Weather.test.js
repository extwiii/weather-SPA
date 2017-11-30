import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Weather from './index';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('App component renders correctly', () => {
  const wrapper = shallow(<Weather />);
  expect(wrapper).toMatchSnapshot();
});

it('App component renders correctly with props', () => {
  const wrapper = shallow(<Weather title="Now" icon="myIcon" temperature={32} />);
  expect(wrapper).toMatchSnapshot();
});
