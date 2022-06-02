import './App.css';
import Home from './components/Home';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>

          <Route
            path="/"
            element={
              this.props.auth0.isAuthenticated ? (
                <Home />
              ) : (
                <h1>
                  Welcome to Captain-Caption! Please log in to use our awesome
                  feature!
                </h1>
              )
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
export default withAuth0(App);
