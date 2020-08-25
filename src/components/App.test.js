import React from 'react';
import { mount } from 'enzyme';
import {
  BrowserRouter as Router
} from "react-router-dom";
import App from './App';

describe('App component', () => {
  it('renders as expected', () => {
    const app = mount(
      <Router>
        <App/>
      </Router>
    );
    expect(app).toMatchSnapshot();
  });
});
