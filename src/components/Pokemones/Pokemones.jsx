import "./Pokemones.css";

import { Link } from "react-router-dom";
import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import usePokemones from "../../Hooks/usePokemones";

function Pokemon({ id, nombre, imagen }) {
  return (
    <ThemeContext.Consumer>
      {(colorTheme) => (
        <Link to={"/pokemon/" + id}>
          <div
            style={{
              backgroundColor:
                colorTheme.theme === "light" ? "lightgray" : "darkgray",
            }}
            className="PokemonCard"
          >
            <img src={imagen} alt={nombre} className="PokemonImg" />
            <p className="PokemonTitulo">
              <span> #{id} </span>
              <span> {nombre} </span>
            </p>
          </div>
        </Link>
      )}
    </ThemeContext.Consumer>
  );
}

function Pokemones({ tipo }) {
  const { pokemones, masPokemones } = usePokemones();

  return (
    <ThemeContext.Consumer>
      {(colorTheme) => (
        <>
          <section
            style={{
              backgroundColor: colorTheme.theme === "light" ? "white" : "black",
            }}
            className="pokemon-container"
          >
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
      )}
    </ThemeContext.Consumer>
  );
}

export default Pokemones;
