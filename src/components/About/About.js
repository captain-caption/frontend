import React, { Component } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class About extends Component {
  render() {
    return (
      <>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="./assets/DylanProfile.jpeg" />
            <Card.Body>
              <Card.Title>Dylan Ullrich</Card.Title>
              <Card.Text></Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./assets/VinnyProfile.jpeg" />
            <Card.Body>
              <Card.Title>Vinny Shipley</Card.Title>
              <Card.Text></Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./assets/Yu-WeiProfile.jpeg" />
            <Card.Body>
              <Card.Title>Yu-Wei Hsieh</Card.Title>
              <Card.Text></Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./assets/SamProfile.jpeg" />
            <Card.Body>
              <Card.Title>Sam Brindle</Card.Title>
              <Card.Text></Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./assets/BenProfile.jpeg" />
            <Card.Body>
              <Card.Title>Ben Choe</Card.Title>
              <Card.Text></Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
}
export default About;
