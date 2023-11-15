
import React, { useState } from "react";
import PokemonList from '../PokemonList/PokemonList';
import ItemCount from '../ItemCount/ItemCount';
import PokemonDetail from "../PokemonDetail/PokemonDetail";


const ItemListContainer = ({ greeting }) => {
  const pokemones = PokemonList(); // Llama a PokemonList para obtener la lista de Pokémon
 

  return (
    <div>
      <h1>{greeting}</h1>
      
    </div>
  );
}
export default ItemListContainer;