import './styles.css';
import { Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return(
        <div className='navbar-container'>  
            <div>
                <img className='logo-pokebola' alt='pokemon' src={'./pokebola.png'}  />
            </div>
            <div>
                <ul className='list-container'>
                    <li><button className='category-button'>Lucha</button></li>
                    <li><button className='category-button'>Acero</button></li>
                    <li><button className='category-button'>Fuego</button></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
};

export default Navbar;

