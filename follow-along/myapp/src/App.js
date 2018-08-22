import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
        { name: "Mose", age: "1.5", belt: "black", id: 1 },
        { name: "Ripley", age: "3", belt: "brown", id: 2 },
        { name: "Vero", age: "35", belt: "yellow", id: 3 },
        { name: "Nick", age: "30", belt: "orange", id: 4 },
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja] //make a copy of hte array
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :D</p>
        <Ninjas ninjas = { this.state.ninjas } />
        <AddNinja addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App;
