import React, { Component } from 'react';
import PokeList from "./Components/PokeList";
import PokeInput from "./Components/PokeInput";
import './App.css';

class App extends Component {
	state = {
		pokemon: []
	}
	dataFunction = e => {
		this.setState({
			pokemon: e
		});
	}
	render() {
		return (
			<div className="App">
			<PokeInput setData = { this.dataFunction }/>
			<PokeList data = { this.state.pokemon } />
	  </div>
		);
	}
}

export default App;
