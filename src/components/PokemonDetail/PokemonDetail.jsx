import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonDetail(data);
    };
    fetchPokemonDetail();
  }, [id]);

  
  return (
    <div>
      {pokemonDetail ? (
        <div>
          <h2>{pokemonDetail.name}</h2>
          <img src={pokemonDetail.sprites.other.dream_world.front_default} alt={pokemonDetail.name} />
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default PokemonDetail;