import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
            { name: "Joe", age: "25", belt: "Purple", id: 1 },
            { name: "Mike", age: "42", belt: "Brown", id: 2 },
            { name: "Mitch", age: "29", belt: "Black", id: 3 },
            { name: "Sara", age: "30", belt: "Orange", id: 4 }
        ]
    }
    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        });
    }
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
           return ninja.id !== id; 
        });
        this.setState({
            ninjas: ninjas
        });
    }
    render() {
        return (
            <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
        );
    }
}

export default App;
