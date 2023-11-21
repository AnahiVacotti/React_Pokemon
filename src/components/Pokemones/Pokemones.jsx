import "./Pokemones.css";

import { Link } from "react-router-dom";
import React from "react";
import usePokemones from "../../Hooks/usePokemones";

function Pokemon({ id, nombre, imagen }) {
  return (
    <Link to={"/pokemon/" + id}>
      <div className="PokemonCard">
        <img src={imagen} alt={nombre} className="PokemonImg" />
        <p className="PokemonTitulo">
          <span> #{id} </span>
          <span> {nombre} </span>
        </p>
      </div>
    </Link>
  );
}

function Pokemones({ tipo }) {
  const { pokemones, masPokemones } = usePokemones();

  return (
    <>
      <section className="pokemon-container">
        {pokemones
          .filter((pokemon) => {
            if (tipo === "") return true;
            return pokemon.types.includes(tipo);
          })
          .map((pokemon) => (
            <Pokemon {...pokemon} key={pokemon.id} />
          ))}
        <button className="btnBuscar" onClick={masPokemones}>
          Mostrar mas
        </button>
      </section>
    </>
  );
}

export default Pokemones;