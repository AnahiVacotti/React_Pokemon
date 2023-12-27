import "./styles.css";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { setTheme } = useContext(ThemeContext);
  const { pokemonQuantity } = useContext(CartContext);

  return (
    <ThemeContext.Consumer>
      {(colorTheme) => (
        <div
          style={{
            backgroundColor: colorTheme.theme === "light" ? "white" : "black",
          }}
          className="navbar-container"
        >
          <div>
            <Link to="/">
              <img
                className="logo-pokebola"
                alt="pokemon"
                src={"./pokebola.png"}
              />
            </Link>
            <button
              onClick={() =>
                setTheme((currentValue) =>
                  currentValue === "light" ? "dark" : "light"
                )
              }
            >
              Tema
            </button>
          </div>
          <div>
            <ul className="list-container">
              <li>
                <Link to="/planta">
                  <button
                    style={{
                      color: colorTheme.theme === "light" ? "black" : "white",
                    }}
                    className="category-button"
                  >
                    Planta
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/agua">
                  <button
                    style={{
                      color: colorTheme.theme === "light" ? "black" : "white",
                    }}
                    className="category-button"
                  >
                    Agua
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/fuego">
                  <button
                    style={{
                      color: colorTheme.theme === "light" ? "black" : "white",
                    }}
                    className="category-button"
                  >
                    Fuego
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to={"/cart"}>
              <img
                className="logo-pokedex"
                alt="pokemon"
                src={"./pokedex.png"}
              />
              <div>
                <span>{pokemonQuantity}</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
