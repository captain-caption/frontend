import React, { Component } from 'react'
import {speechToText, stopSpeechToText} from '../assets/script.js'
import { Button, Form, Modal } from 'react-bootstrap';
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
            name: "",
            target: "",
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
      .then(res => {console.log(res); this.setState({ translatedStr: res.data}); })
      .catch(err => {console.log(err)});
    }

    createTranscription = (transcribeObj) => {
      let url = `${SERVER}/transcribe`
      console.log(url);
      axios.post(`${SERVER}/transcribe`, transcribeObj)
      .then(res => {console.log(res); this.setState({ transcribedStr: res.data}); })
      .catch(err => {console.log(err)});
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

    handleSubmit = (e) => {
      e.preventDefault();
      let joinedStr = this.state.data.join(". ");
      // create object that looks like:
      let translateObj = {
        username: this.state.name,
        raw_text: joinedStr,
        code: this.state.target
      }
      console.log(translateObj);

      if(!translateObj.code){
        this.createTranscription(translateObj);
      } else {
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
                <option>English</option>
                {languageChoices.map( (lang,idx) => (
                  <option key={idx} value={lang.code}>{lang.lang}</option>
                ))}
                {/* Do we want to use a function to populate languages? or select just certain ones? */}
              </Form.Select>
            </Form.Group>
            <Button type="submit">Translate!</Button>
          </Form>

        </div>
        <div className="child2" >
          <p id='final' ref={this.showRef}>{this.state.data.join(". ")}</p>
          <p id='interim'></p>
        </div>

      </div>
    )
  }
}
