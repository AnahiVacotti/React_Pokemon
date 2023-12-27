import PokemonList from "../PokemonList/PokemonList";

const ItemListContainer = ({ greeting }) => {
  // Llama a PokemonList para obtener la lista de Pokémon
  const pokemones = PokemonList();

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};
export default ItemListContainer;
