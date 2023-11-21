import "./PokemonDetail.css";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function PokemonDetail2() {
  const params = useParams();

  console.log("params", params);

  const [pokemon, setPokemon] = useState();

  const fetchPokemonById = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + params.numeroDePokemon
    );
    const poke = await response.json();
    console.log(poke);
    const abilities = poke.abilities.map((a) => a.ability.name);
    const stats = poke.stats.map((s) => {
      return { name: s.stat.name, base: s.base_stat };
    });
    const types = poke.types.map((t) => t.type.name);

    return {
      id: poke.id,
      nombre: poke.name,
      imagen: poke.sprites.other.dream_world.front_default,
      abilities,
      stats,
      types,
    };
  };

  useEffect(() => {
    const getPokemon = async () => {
      setPokemon(await fetchPokemonById());
    };

    getPokemon();
  }, []);

  if (!pokemon) return <div>Cargando...</div>;

  return (
    <div className="modalContainer">
      <section className="modalBody">
        <div className="imagenContainer">
          <img
            src={pokemon.imagen}
            alt={pokemon.nombre}
            className="imagenDetalle"
          />
          <section>
            {pokemon.types?.map((type) => (
              <span className="tag"> {type} </span>
            ))}
          </section>
        </div>
        <div className="data">
          <h2 className="titulo">
            {" "}
            {pokemon.nombre} ({pokemon.id})
          </h2>
          <h3 className="tituloSeccion"> Habilidades </h3>
          {pokemon.abilities?.map((ability) => (
            <span className="tag">{ability} </span>
          ))}
          <h3 className="tituloSeccion"> Estadisticas </h3>
          <div className="stats">
            {pokemon.stats?.map((stat) => (
              <section>
                <span className="puntos">{stat.base} </span>
                <span> {stat.name}</span>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PokemonDetail2;