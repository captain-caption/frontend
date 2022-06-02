import './App.css';
import Home from './components/Home';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header/Header';
import MyRoutes from './components/MyRoutes/MyRoutes';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {
          this.props.auth0.isAuthenticated ? (
            <>
            <Home></Home>
            </>
          ) : <h1>Welcome to Captain-Caption! Please log in to use our awesome feature!</h1>
        }
      </div>
    );
  }
}
export default withAuth0(App);
