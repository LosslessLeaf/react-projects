import React from "react";
import axios from "axios";
import "./PokeList.css";


export default class PokeList extends React.Component {
    state = {
        name: String,
        pokemon: []
    }
    setData = e => {
        this.setState({
           pokemon: e.target.value 
        });
    }
    handleChange = e => {
        this.setState({ name: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const pokemon = {
            name: this.state.name
        };
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`, { pokemon })
            .then(res => {
                let setData = [];
                setData.push(res.data)
                this.props.setData(setData);
            });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Pokemon Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <button type="submit">Lookup</button>
            </form>
        );
    }
}
