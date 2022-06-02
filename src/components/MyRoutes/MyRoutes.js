import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About/About';
import { withAuth0 } from '@auth0/auth0-react';

class MyRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    );
  }
}
export default withAuth0(MyRoutes);
