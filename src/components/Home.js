import React, { Component } from 'react'
import {speechToText, stopSpeechToText} from '../assets/script.js'
import { Button, Form, Accordion } from 'react-bootstrap';
import './Home.css';
import languageChoices from  '../assets/langChoices.json'
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;

export default class Home extends Component {
    constructor(props){
        super(props)
        this.showRef = React.createRef()
        this.state={
            data:[],
            transcribedData: [],
            name: "",
            target: "",
            transcribeOrTranslate: "transcribe",
            translatedStr: "",
            transcribedStr: "",
            isStartButtonShow:true
        }
    }
    
    handleSpeech = () => {
      speechToText()
      this.setState({isStartButtonShow: !this.state.isStartButtonShow})
    }

    //After the stop button is clicked, data will be updated.
    stopSpeech = () =>{
      stopSpeechToText()
       this.setState(
         {data:[...this.state.data ,this.showRef.current.innerText],
          isStartButtonShow: !this.state.isStartButtonShow
        })
    }

    //make this async
    // create a createTranslation
    // createTranslation = (strToTranslate) => {
    //   axios.post(``)
    // server/translate?obj
    // }
    createTranslation = (translateObj) => {
      axios.post(`${process.env.REACT_APP_SERVER}/translate`, translateObj)
      .then(res => {console.log(res); this.setState({ translatedStr: res.data, transcribedData: [...this.state.transcribedData, res.data] }); })
      .catch(err => {console.log(err)});
    }

    // get data from ___ user
    getTranscription = async () => {
      axios.get(`${SERVER}/transcript`)
      .then(res => {
         console.log(res.data); this.setState({ transcribedData: res.data}); 
      })
      .catch(err => { console.log(err) });
    }

    createTranscription = (transcribeObj) => {
      let url = `${SERVER}/transcript`
      console.log(url);
      axios.post(`${SERVER}/transcript`, transcribeObj)
      .then(res => {console.log(res); this.setState({ transcribedStr: res.data, transcribedData: [...this.state.transcribedData, res.data]}); })
      .catch(err => {console.log(err)});
    }

    deleteTranscription = (transcribeIdToDelete) => {
      axios.delete(`${SERVER}/transcript/${transcribeIdToDelete}`)
      .then(res => { console.log(res); this.setState({transcribedData: this.state.transcribedData.filter(transcription => transcription.__id !== transcribeIdToDelete) }); })
    }

    handleUsername = (e) => {
      this.setState({
        name: e.target.value
      })
    }

    handleLanguageChoice = (e) => {
      this.setState({
        target: e.target.value
      });
    }

    handleTranscribeOrTranslate = (e) => {
      this.setState({
        transcribeOrTranslate: e.target.value
      })
      console.log(e.target.value)
    }
    handleSubmit = (e) => {
      e.preventDefault();
      let joinedStr = this.state.data.join(". ");
      // create object that looks like:
      let translateObj = {
        username: this.state.name,
        raw_text: joinedStr,
        code: this.state.target,
      }
      console.log(translateObj);

      if(this.state.transcribeOrTranslate === "transcribe") {
        this.createTranscription(translateObj);
      } else if(this.state.transcribeOrTranslate === "translate"){
        this.createTranslation(translateObj);
      }

      // send this object to the backend

      //if(lang) {
      //   transcribe
      // } else {
      //   translate 
      // }

    }

  render() {
    return (
      <>
      <div className="parent">
        <div className="child1">
          {
            this.state.isStartButtonShow ? <Button id="start" variant="danger" onClick={this.handleSpeech}>Record</Button> 
            : <Button variant="secondary" onClick={this.stopSpeech}>Stop</Button>
          }
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name: </Form.Label>
              <Form.Control id="name" placeholder="Enter your name" onChange={this.handleUsername} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Language Translation Selection</Form.Label>
              <Form.Select ref="target" onChange={this.handleLanguageChoice}>
                <option value="en">English</option>
                {languageChoices.map( (lang,idx) => (
                  <option key={idx} value={lang.code}>{lang.lang}</option>
                ))}
                {/* Do we want to use a function to populate languages? or select just certain ones? */}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Transcribe/Translate</Form.Label>
              <Form.Select ref="transcribeOrTranslate" onChange={this.handleTranscribeOrTranslate}>
                <option value="transcribe">Transcribe</option>
                <option value="translate">Translate</option>
              </Form.Select>
            </Form.Group>
            <div >
            <Button className="child" type="submit">Submit!</Button>
            <p>Submit will save to a Database</p>
            </div>
          </Form>
          {
            this.state.transcribedData.map(data =>(
              <div>{data.timestamp}</div>
            ))
          }
          
          <button onClick={this.getTranscription}>GET</button>
        </div>
        <div className="child2" >
          <p id='final' ref={this.showRef}>{this.state.data}</p>
          <p id='interim'></p>
        </div>

      </div>
      <Accordion striped bordered hover>
          {
            this.state.transcribedData.map(data =>(
              <Accordion.Item key={data._id} eventKey={data._id}>
                <Accordion.Header>{data.username}{data.timestamp}</Accordion.Header>
                  <Accordion.Body>
                    {data.raw_text}
                  </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
    </>
    )
  }
}
