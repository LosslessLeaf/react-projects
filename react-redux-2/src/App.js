import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: "Joe", age: "25", belt: "Purple", id: 1 }, 
      { name: "Mike", age: "42", belt: "Brown", id: 2 }, 
      { name: "Mitch", age: "29", belt: "Black", id: 3 }, 
      { name: "Sara", age: "30", belt: "Orange", id: 4 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;