import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  useLocation
} from "react-router-dom";
import Footer from "./Footer";
import Videos from "./Videos"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = ({ randomizeVideos = false }) => (
  <>
    <ScrollToTop/>
    <Videos randomizeVideos={randomizeVideos}/>
    <Footer/>
  </>
);

App.propTypes = {
  randomizeVideos: PropTypes.bool
};

export default App;
