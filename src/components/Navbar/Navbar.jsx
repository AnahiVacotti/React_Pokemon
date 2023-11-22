import "./styles.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link to= "/">
          <img className="logo-pokebola" alt="pokemon" src={"./pokebola.png"} />
        </Link>
      </div>
      <div>
        <ul className="list-container">
          <li>
            <Link to="/planta">
              <button className="category-button">Planta</button>
            </Link>
          </li>
          <li>
            <Link to="/agua">
              <button className="category-button">Agua</button>
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