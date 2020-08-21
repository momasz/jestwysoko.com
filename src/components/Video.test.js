import React from 'react';
import { mount } from 'enzyme';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Video from './Video';

describe('Video component', () => {
  it('renders as expected', () => {
    const video = mount(
      <Router>
        <Video/>
      </Router>
    );
    expect(video).toMatchSnapshot();
  });
});
