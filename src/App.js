import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(){
    super()

    this.state = {
      endpoint: 'http://localhost:3004',
      color: 'white'
    }
  }

  //Methods
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color);
  };

  setColor = (color) => {
    this.setState({ color });
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (color) => {
      document.body.style.backgroundColor = color;
    })

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>
        <button id="blue" onClick={() => this.setColor('yellow')}>Yellow</button>
        <button id="red" onClick={() => this.setColor('orange')}>Orange</button>
      </div>
    );
  }
}

export default App;
