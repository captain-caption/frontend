import React, { Component } from 'react'
import {speechToText, stopSpeechToText} from '../assets/script.js'
import { Button} from 'react-bootstrap';
import './Home.css';
import axios from 'axios';
import FormData from './FormData/FormData.js';
import ShowHistory from './ShowHistory/ShowHistory.js';

let SERVER = process.env.REACT_APP_SERVER;

export default class Home extends Component {
    constructor(props){
        super(props)
        this.finalRef = React.createRef()
        this.interimRef = React.createRef()
        this.state={
            data:[],
            transcribedData: [],
            name: "",
            target: "",
            transcribeOrTranslate: "transcribe",
            translatedStr: "",
            transcribedStr: "",
            isStartButtonShow:true,
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
         {data:[...this.state.data , this.finalRef.current.innerText, this.interimRef.current.innerText],
          isStartButtonShow: !this.state.isStartButtonShow,
        })
    }

    createTranslation = (translateObj) => {
      axios.post(`${process.env.REACT_APP_SERVER}/translate`, translateObj)
      .then(res => {console.log(res); this.setState({ translatedStr: res.data.translated_text, transcribedData: [...this.state.transcribedData, res.data] }); })
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
      .then(res => { console.log(res); this.setState({transcribedData: this.state.transcribedData.filter(transcription => transcription.__id !== transcribeIdToDelete).reverse() }); })
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
      console.log(e)
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

    }

  render() {
    console.log(this.state.translatedStr)
    return (
      <>
      <div className="parent">
        <div className="child1">
          {
            this.state.isStartButtonShow ? <Button id="start" variant="danger" onClick={this.handleSpeech}>Record</Button> 
            : <Button variant="secondary" onClick={this.stopSpeech}>Stop</Button>
          }
          <FormData 
          handleUsername={this.handleUsername} 
          handleTranscribeOrTranslate={this.handleTranscribeOrTranslate} 
          handleLanguageChoice={this.handleLanguageChoice} 
          handleSubmit={this.handleSubmit}/>
          
          <Button onClick={this.getTranscription}>History</Button>
        </div>
        <div className="child2" >
          <div id='final' ref={this.finalRef} onChange={this.testing}></div>
          <div id='interim' ref={this.interimRef}></div>
          
        </div>
        <div>
          {this.state.translatedStr}
        </div>

      </div>
      <ShowHistory deleteTranscription={this.deleteTranscription} transcribedData={this.state.transcribedData}/>
    </>
    )
  }
}
