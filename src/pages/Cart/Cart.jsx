import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Cart = () => {
  const { pokemones, clear, removePokemon } = useContext(CartContext);

  return (
    
    <ThemeContext.Consumer>
      {(colorTheme) => (
        <div style={{
          backgroundColor:
            colorTheme.theme === "light" ? "white" : "darkgray",
        }}>
          <h1>Tu Pokedex</h1>
          <button onClick={clear}>Vaciar pokedex</button>
          {pokemones.length > 0 ? (
            <div>
              {pokemones.map((pokemon) => (
                <div key={pokemon.id}>
                  {pokemon.imagen && (
                    <img
                      src={pokemon.imagen}
                      alt={pokemon.nombre}
                      className="PokemonImg"
                    />
                  )}
                  <p>
                    <span> #{pokemon.id} </span>
                    <span> {pokemon.nombre} </span>
                    <span> Cantidad: {pokemon.quantity} </span>
                  </p>
                  <button onClick={() => removePokemon(pokemon.id)}>
                    Eliminar
                  </button>
                  <Link to="/checkout"><button>Comprar</button></Link>
                </div>
              ))}
            </div>
          ) : (
            <h3>No hay pokemones en la pokedex</h3>
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Cart;
