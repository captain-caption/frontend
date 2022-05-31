import React, { Component } from 'react'
import { speechToText } from '../assets/script.js'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    
    handleSpeech = () => {
        let newData = speechToText()
        console.log('newData is: ' + newData)
        this.setState({data: [...this.state.data, newData]})
        console.log(this.state.data)
    }

  render() {
    return (
      <div>
          <p id='show'></p>
          <button id="start" onClick={this.handleSpeech}>START!</button>
      </div>
    )
  }
}
