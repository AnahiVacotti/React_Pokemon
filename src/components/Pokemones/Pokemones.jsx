import "./Pokemones.css";

import React, { useEffect, useState } from "react";

import Buscador from "../Buscador/Buscador";
import PokemonDetail from "../PokemonDetail/PokemonDetail";
import usePokemones from "../../Hooks/usePokemones";

function Pokemon({ id, nombre, imagen, verPokemon }) {
  return (
    <div className="PokemonCard" onClick={verPokemon}>
      <img src={imagen} alt={nombre} className="PokemonImg" />
      <p className="PokemonTitulo">
        <span> #{id} </span>
        <span> {nombre} </span>
      </p>
    </div>
  );
}

function Pokemones({ tipo }) {
  const { pokemones, masPokemones, searchPokemon } = usePokemones();
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} });
  const [busqueda, setBusqueda] = useState("");

  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon });
  const noVerPokemon = () => setMostrar({ mostrar: false, pokemon: {} });

  const buscarPokemon = async (e) => {
    e.preventDefault();

    if (!busqueda) return;

    const pokemon = await searchPokemon(busqueda);

    setMostrar({ mostrar: true, pokemon });
  };

  console.log(pokemones[67]);
  return (
    <>
      <PokemonDetail {...mostrar} cerrar={noVerPokemon} />
      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        buscarPokemon={buscarPokemon}
      />
      <section className="pokemon-container">
        {pokemones
          .filter((pokemon) => {
            if (tipo === "") return true;
            return pokemon.types.includes(tipo);
          })
          .map((pokemon) => (
            <Pokemon
              {...pokemon}
              key={pokemon.id}
              verPokemon={() => verPokemon(pokemon)}
            />
          ))}
        <button className="btnBuscar" onClick={masPokemones}>
          Mostrar mas
        </button>
      </section>
    </>
  );
}

export default Pokemones;