import React, { Component } from 'react'
import { speechToText, stopSpeechToText} from '../assets/script.js'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.showRef = React.createRef()
        this.state={
            data:[],
        }
    }
    
    handleSpeech = () => {
        speechToText()
    }
    stopSpeech = () =>{
      stopSpeechToText()
      // setTimeout(() =>{
       this.setState({data:[...this.state.data ,this.showRef.current.innerText]})
      // },2000)
       
      
    }

  render() {
    return (
      <div>
          <div id='final' ref={this.showRef}></div>
          <div id='interim'></div>
          <button id="start" onClick={this.handleSpeech}>START!</button>
          <button onClick={() => console.log(this.state.data)}>State Data</button>
          <button onClick={this.stopSpeech} >Stop</button>
      </div>
    )
  }
}
