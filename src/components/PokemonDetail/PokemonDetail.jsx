import './PokemonDetail.css'


function PokemonDetail ({mostrar,pokemon, cerrar}) {
  return (
  <div className="modalContainer" onClick={cerrar} style={{display: mostrar ? 'grid' : 'none'}}>
  <section className="modalBody">
  <div className="imagenContainer">
    <img src={pokemon.imagen} alt={pokemon.nombre} className="imagenDetalle" />
    <section>
      {pokemon.types?.map(type => <span className='tag'> {type} </span>)}
    </section>
  </div>
  <div className="data">
    <h2 className="titulo"> {pokemon.nombre} ({pokemon.id})</h2>
    <h3 className="tituloSeccion"> Habilidades </h3>
    {pokemon.abilities?.map ( ability => <span className='tag'>{ability} </span>)}
    <h3 className="tituloSeccion"> Estadisticas </h3>
    <div className='stats'> 
    {pokemon.stats?.map ( stat => 
    <section>
    <span className='puntos'>{stat.base} </span>
    <span> {stat.name}</span>
    </section>
    )}
    </div>

    </div>
  </section>
  </div>
  

)}


export default PokemonDetail;