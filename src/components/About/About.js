import React, { Component } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class About extends Component {
  render() {
    return (
      <>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="./img/DylanProfile.jpeg"/>
            <Card.Body>
              <Card.Title>Dylan Ullrich</Card.Title>
              <Card.Text></Card.Text>
              <a href='https://github.com/GetUllrichorDieTrying'><Button variant='secondary'>Github</Button></a>
              <a href='https://www.linkedin.com/in/dsullrich/'><Button>LinkedIn</Button></a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./img/VinnyProfile.jpeg" />
            <Card.Body>
              <Card.Title>Vinny Shipley</Card.Title>
              <Card.Text></Card.Text>
              <a href='https://github.com/VinnyShipley'><Button variant='secondary'>Github</Button></a>
              <a href='https://www.linkedin.com/in/vinny-shipley/'><Button>LinkedIn</Button></a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./img/Yu-WeiProfile.jpeg" alt='Yu-Wei' />
            <Card.Body>
              <Card.Title>Yu-Wei Hsieh</Card.Title>
              <Card.Text></Card.Text>
              <a href='https://github.com/welly091'><Button variant='secondary'>Github</Button></a>
              <a href='https://www.linkedin.com/in/welly-yu-wei-hsieh/'><Button>LinkedIn</Button></a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./img/SamProfile.jpeg" />
            <Card.Body>
              <Card.Title>Sam Brindle</Card.Title>
              <Card.Text></Card.Text>
              <a href='https://github.com/samBrindle'><Button variant='secondary'>Github</Button></a>
              <a href='http://www.linkedin.com/in/sam-brindle/'><Button>LinkedIn</Button></a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./img/BenProfile.jpeg" />
            <Card.Body>
              <Card.Title>Ben Choe</Card.Title>
              <Card.Text></Card.Text>
              <a href='https://github.com/bc0351'><Button variant='secondary'>Github</Button></a>
              <a href='https://www.linkedin.com/in/benchoe'><Button>LinkedIn</Button></a>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
}
export default About;
