import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { clear } from '@testing-library/user-event/dist/clear';
import '../../components/Pokemones/Pokemones.css';
import { Link } from "react-router-dom";

const Cart = () => {
  const { pokemones, clear, removePokemon } = useContext(CartContext);
  

  return (
  
  <div>
    <h1>Tu Pokedex</h1>
    <button onClick={clear}>Vaciar pokedex</button>
    {pokemones.length > 0 ? (
      <div >
          {pokemones.map((pokemon) => (
            <div key={pokemon.id}>
              {pokemon.imagen && (
                <img src={pokemon.imagen} alt={pokemon.nombre} className="PokemonImg"/>
              )} 
              <p>
                <span>  #{pokemon.id}  </span>
                <span>  {pokemon.nombre}  </span>
                <span>  Cantidad: {pokemon.quantity}  </span>
              </p>
              <button onClick={ () => removePokemon (pokemon.id)}>Eliminar</button>
            </div>
          ))}
      </div>
       )
    : 
    <h3>No hay pokemones en la pokedex</h3>

  }
  
  </div>
  
  );
};


export default Cart
