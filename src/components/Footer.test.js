import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders as expected', () => {
    const footer = mount(
      <Footer/>
    );
    expect(footer).toMatchSnapshot();
  });
});
