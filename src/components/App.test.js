import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders as expected', () => {
    const app = mount(
      <App/>
    );
    expect(app).toMatchSnapshot();
  });
});
