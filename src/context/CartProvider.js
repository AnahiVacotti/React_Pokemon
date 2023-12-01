import { useEffect, useState } from 'react'
import { CartContext} from './CartContext'

const CartProvider = ({children}) => {
  const [pokemones, setPokemones] =useState([]);
  const [pokemonQuantity, setPokemonQuantity] = useState (0);

  const addPokemon = (pokemonAdd, quantity ) => {
    if (isInCart(pokemonAdd.id)){
      const newPokemones=pokemones.map((pokemon) => { 
        if (pokemon.id === pokemonAdd.id) {
          return {
            ...pokemon,
            quantity: pokemon.quantity + quantity,
          }
        }
        return pokemon;
      });
      setPokemones(newPokemones);
    }
    else {  setPokemones ([
        ...pokemones,
        
        {
          ...pokemonAdd,
          quantity,
        },
      ]);

      }
  } 

  


 const clear = () =>{
  setPokemones ([]);
 }

const isInCart = (id) => {
  return pokemones.some((pokemon)=>pokemon.id === id) 
}



const removePokemon = (pokemonId) => {
setPokemones (pokemones.filter ((pokemon) => pokemon.id !== pokemonId ))
};

  useEffect (() => {
    setPokemonQuantity (
      pokemones.reduce((acc, pokemon) => acc + pokemon.quantity, 0), 
      0
    );
  }, [pokemones]);

    return (
      <CartContext.Provider value={{ pokemones, addPokemon, pokemonQuantity, clear, removePokemon }}>
          {children}
      </CartContext.Provider>
    )
}
 
export default CartProvider
