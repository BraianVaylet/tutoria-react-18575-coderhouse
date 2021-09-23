import React, { useEffect, useState } from 'react';
import './app.css'

const API_URL = 'https://pokeapi.co/api/v2'

function App() {
  const LIMIT = 10
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/pokemon?limit=${LIMIT}`)
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='container'>
      <h3>Primeros {LIMIT} pokemons desde {API_URL}</h3>
      <ul>  
        {pokemons.length && pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <span>{pokemon.name}</span>
          </li>
        ))}   
      </ul>
    </div>
  );
}

export default App;
