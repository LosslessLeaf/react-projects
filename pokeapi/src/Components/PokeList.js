import React from "react";
// import axios from "axios";
import "./PokeList.css";


function PokeList(props) {
    if (props.data[0] !== undefined) {
        console.log(props.data[0]);
        return (
            <div id="container">
                    <ul>
                        {props.data.map(item => (
                            <div id="main-info">
                                <div id="header">
                                    <img id="sprite" src={item.sprites.front_default} alt="sprite"/>
                                    <h1 id="name">{item.name.toUpperCase()}</h1>
                                    <ul id="types">
                                        {item.types.map(type => <li key={Math.random()}>{type.type.name.toUpperCase()}</li>)}
                                    </ul>
                                </div>
                                <div id="body">
                                    <div id="stats">
                                        <h2 className="label">Stats</h2>
                                        <div id="stat-table">
                                            <ul id="stat-names">
                                                {item.stats.map(stat => <li key={Math.random()}>{stat.stat.name}</li>)}
                                            </ul>
                                            <ul id="stat-values">
                                                {item.stats.map(stat => <li key={Math.random()}>{stat.base_stat}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="moves">
                                        <h2 className="label">Moves</h2>
                                        <ul id="move-list">
                                            {item.moves.map(move => <li key={Math.random()}>{move.move.name}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
            </div>
        );
    } else {
        return null;
    }
    // state = {
    //     pokemon: []
    // }
    // componentDidMount() {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/moltres`).then(res => {
    //         let pokemon = [];
    //         pokemon.push(res.data);
    //         this.setState({ pokemon: pokemon });

    //         console.log(this.state.pokemon);
    //     });
    // }
    // render() {
        
    }
// }

export default PokeList;