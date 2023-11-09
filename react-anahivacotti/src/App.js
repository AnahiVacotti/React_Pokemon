import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


function App() {
  const [pokemones, setPokemones] =useState([])
  useEffect(() => {

  const getPokemones = async () => {
    
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const listaPokemones = await response.json()
    console.log(listaPokemones);
    const { results } = listaPokemones
    
      const newPokemones = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const poke = await response.json();
        console.log (poke)
      return {
        id: poke.id,
        name: poke.name,
        img: poke.sprites.other.dream_world.front_default
      }
    })
    setPokemones (await Promise.all(newPokemones));
    
  }
  getPokemones()
  
}, [])


  return (
    <div >
        <Navbar />
        <ItemListContainer greeting="Bienvenidos entrenadores pokemon"/>
        
        {
          pokemones.map(pokemon => {
            return (
              <div key={pokemon.id} to={`/pokemon/${pokemon.id}`} className='cardPokemones'>
                <p>{pokemon.id}</p>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.img} alt={pokemon.name} />
                <ItemCount />
              </div>
            )
          })
        }
        
    </div>
    
  );
}

export default App;