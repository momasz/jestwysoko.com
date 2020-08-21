import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Videos from "./Videos"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <Header/>
    <ScrollToTop/>
    <Videos/>
    <Footer/>
  </Router>
);

export default App;
