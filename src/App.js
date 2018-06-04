import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const videoWidth = 320
const videoHeight = 0

class App extends Component {

  constructor(props) {
    super(props)
    this.setVideoRef = element => {
      this.videoRef = element
    }
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      this.videoRef.srcObject = stream
      this.videoRef.play()
    }).catch((err) => {
      console.log(err)
    })
  }



  render() {
    return (
      <div className="App">
        <video ref={this.setVideoRef}>No stream video</video>
      </div>
    );
  }
}

export default App;
