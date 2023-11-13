import React, { useEffect, useState } from 'react';

const PokemonList = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      });

      setPokemones(await Promise.all(newPokemones));
    };

    getPokemones();
  }, []);

  return pokemones;
};

export default PokemonList;