import "./styles.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img className="logo-pokebola" alt="pokemon" src={"./pokebola.png"} />
      </div>
      <div>
        <ul className="list-container">
          <li>
            <Link to="/lucha">
              <button className="category-button">Lucha</button>
            </Link>
          </li>
          <li>
            <Link to="/acero">
              <button className="category-button">Acero</button>
            </Link>
          </li>
          <li>
            <Link to="/fuego">
              <button className="category-button">Fuego</button>
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;