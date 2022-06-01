import './App.css';
import Home from './components/Home';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
    }
  }

  openModalHandle = () => {
    this.setState({
      isModalDisplaying: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    })
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="home">What'd ye say?</Navbar.Brand>
            {/* <Navbar.Brand>
          <img 
            alt="Crunch Berries Cereal"
            src="/assets/captaincrunch.png"
            width="30"
            height="30"
            // className="d-inline-block align-top"
          />
        </Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-us">About the Devs</Nav.Link>
              <Nav.Link onClick={this.openModalHandle} >My Recordings</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Home />

        <Modal
          show={this.isModalDisplaying}
        >
          <Modal.Header>
            <Modal.Title>My Recordings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p id='show'></p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default App;
