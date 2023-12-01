import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartWidget = () => {
    return(
        <div>
            <Link to={'/cart'}>
            <img className='logo-pokedex' alt='pokemon' src={'./pokedex.png'}  />
            <div>
                <span>4</span>
            </div>
            </Link>
        </div>
        
    )
}

export default CartWidget