import "./Buscador.css";

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  return (
    <>
      <h3 className="titulo"> Muchos pokemones, elige tu favorito.</h3>
      <form className="containerBuscador" onSubmit={buscarPokemon}>
        <input
          type="text"
          placeholder="Encuentra tu pokemon con su nombre o #id"
          className="inputBuscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="btnBuscar" type="submit">
          Buscar Pokemon
        </button>
      </form>
    </>
  );
}

export default Buscador;
