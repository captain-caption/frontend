import React, { Component } from 'react';
import { Accordion, Button } from 'react-bootstrap';

export default class ShowHistory extends Component {
  handelDelete = (id) => {
    this.setState({});
    this.props.deleteTranscription(id);
  };
  render() {
    return (
      <Accordion striped bordered hover>
        {this.props.transcribedData.map((data) => (
          <Accordion.Item key={data._id} eventKey={data._id}>
            <Accordion.Header>
              {data.username} {data.timestamp}
            </Accordion.Header>
            <Accordion.Body>
              <p>Origin text: {data.raw_text}</p>
              {data.translated_text ? (
                <p>Translate text: {data.translated_text}</p>
              ) : (
                <></>
              )}
              <Button
                variant="danger"
                onClick={() => this.handelDelete(data._id)}
              >
                Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
}
