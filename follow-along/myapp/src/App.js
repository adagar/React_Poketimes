import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
        { name: "Mose", age: "1.5", belt: "black", id: 1 },
        { name: "Ripley", age: "3", belt: "brown", id: 2 },
        { name: "Vero", age: "35", belt: "yello", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :D</p>
        <Ninjas ninjas = { this.state.ninjas } />
      </div>
    );
  }
}

export default App;
