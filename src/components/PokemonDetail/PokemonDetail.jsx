import "./PokemonDetail.css";

import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function PokemonDetail2() {
  const params = useParams();
  const [count, setCount] = useState(1);
  const stock = 5;
  const navigate = useNavigate();
  const { addPokemon } = useContext(CartContext);

  const addToCart = () => {
    console.log(pokemon);
    console.log(count);
    addPokemon(pokemon, count);
  };

  const handleNavigation = () => {
    navigate("/cart");
  };

  const [pokemon, setPokemon] = useState();

  const fetchPokemonById = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + params.numeroDePokemon
    );
    const poke = await response.json();
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
            {pokemon.types?.map((type, index) => (
              <span key={index} className="tag">
                {" "}
                {type}{" "}
              </span>
            ))}
          </section>
        </div>
        <div className="data">
          <h2 className="titulo">
            {" "}
            {pokemon.nombre} ({pokemon.id})
          </h2>
          <h3 className="tituloSeccion"> Habilidades </h3>
          {pokemon.abilities?.map((ability, index) => (
            <span key={index} className="tag">
              {ability}{" "}
            </span>
          ))}
          <h3 className="tituloSeccion"> Estadisticas </h3>
          <div className="stats">
            {pokemon.stats?.map((stat, index) => (
              <section key={index}>
                <span className="puntos">{stat.base} </span>
                <span> {stat.name}</span>
              </section>
            ))}
          </div>
        </div>
        <div>
          <button onClick={handleNavigation}>Elegir Pokemon!</button>
          <button onClick={addToCart}> Agregar a la Pokedex</button>
          <h3>Tus Pokemones:</h3>

          <h3>Disponibles: {stock} </h3>
          <ItemCount count={count} setCount={setCount} stock={stock} />
        </div>
      </section>
    </div>
  );
}

export default PokemonDetail2;
