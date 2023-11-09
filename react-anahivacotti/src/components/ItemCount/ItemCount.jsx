import { useRef, useState } from "react"


const ItemCount = () => {
    const [ count, setCount ] = useState (1);
    const divRef =useRef(null);
    const renderCount = useRef (1);
    

    const onAdd = () => {
    renderCount.current++;
    setCount (count + 1)
};
const onSubstract = () => {
    renderCount.current--;
setCount (count - 1)
}
const sumarTexto = () =>{
divRef.current.innerHTML = 'Ya tienes nuevos compañeros!'
}
  return (
    <div className="contadorPokemon">
      <button className="boton" onClick={onSubstract}>-</button>
      <h2>{count}</h2>
      <button className="boton" onClick={onAdd}>+</button>
        <button className="botonListo" onClick={sumarTexto}>Listo!</button>
        <h3 ref={divRef}></h3>
        
    </div>
        
    
  )
}

export default ItemCount
