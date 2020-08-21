import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders as expected', () => {
    const header = mount(
      <Header/>
    );
    expect(header).toMatchSnapshot();
  });
});
