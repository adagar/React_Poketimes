import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :D</p>
        <Ninjas name="Mose" age="1.5" belt="black"/>
        <Ninjas name="Ripley" age="3" belt="brown"/>
        <Ninjas name="Vero" age="35" belt="yello"/>
      </div>
    );
  }
}

export default App;
