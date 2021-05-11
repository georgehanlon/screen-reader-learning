import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './navbar';
import { Menu } from 'semantic-ui-react';

configure({adapter: new Adapter()});

describe('Navbar', () => {
  test('Renders', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.exists()).toEqual(true);
  });

  test('Renders links', () => {
    const wrapper = shallow(<Navbar />);
    
    expect(wrapper.containsMatchingElement(<Menu.Item as='a' href='/'>Home</Menu.Item>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Menu.Item as='a' href='/about'>About</Menu.Item>)).toEqual(true);
  });
});
