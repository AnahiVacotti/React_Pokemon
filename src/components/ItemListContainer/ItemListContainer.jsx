
import React from "react";
import PokemonList from '../PokemonList/PokemonList';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
  const pokemones = PokemonList(); // Llama a PokemonList para obtener la lista de Pokémon

  return (
    <div>
      <h1>{greeting}</h1>
      {pokemones.map((pokemon) => (
        <div key={pokemon.id} className='cardPokemones'>
          <p>{pokemon.id}</p>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
      ))}
      <ItemCount />
    </div>
  );
}

export default ItemListContainer;