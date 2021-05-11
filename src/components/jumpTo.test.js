import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JumpTo from './jumpTo';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('JumpTo', () => {
  test('Renders', () => {
    const wrapper = shallow(<BrowserRouter><JumpTo /></BrowserRouter>);
    
    expect(wrapper.find(JumpTo).exists()).toEqual(true);
  });
});
