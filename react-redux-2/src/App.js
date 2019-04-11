import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>
        <Ninjas name="Joe" age="24" belt="purple" />
        <Ninjas name="Mike" age="50" belt="brown" />
      </div>
    );
  }
}

export default App;