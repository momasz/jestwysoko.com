import React from 'react';
import { mount } from 'enzyme';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Videos from './Videos';

describe('Videos component', () => {
  it('renders as expected', () => {
    const videos = mount(
      <Router>
        <Videos/>
      </Router>
    );
    expect(videos).toMatchSnapshot();
  });
});
