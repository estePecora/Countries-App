import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './NavBar';

configure({adapter: new Adapter()});

describe('<NavBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('Deberia renderizar cuatro <NavLink />', () => {
    expect(wrapper.find(NavLink)).toHaveLength(4);
  });
  
})