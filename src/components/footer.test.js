import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer';

configure({adapter: new Adapter()});

describe('Footer', () => {
  test('Renders', () => {
    const wrapper = shallow(<Footer />);
    
    expect(wrapper.exists()).toEqual(true);
  });
});