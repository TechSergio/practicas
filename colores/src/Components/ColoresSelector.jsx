import React, { useContext, useRef } from 'react'
import { ColoresContext } from './ColoresContexto'

const ColoresSelector = () => {

    //Continuando con lo aprendido le agregamos funcionalidad a useRef
    const historialColores = useRef([])

    //invocamos al contexto
    const { colorSeleccionado, setColorSeleccionado} = useContext(ColoresContext)

    //en la segunda parte manejamos el historial de colores
    const handleColorChange = (evento) => {
        const nuevoColor = evento.target.value
        setColorSeleccionado(nuevoColor)
        if (historialColores.current.length < 11){
        historialColores.current = [nuevoColor, ...historialColores.current]
        console.log(historialColores.current)
        }else {
            alert("llego al limite de 10 colores !!!")
        }
    }
  return (
    <>
        <input
        type='color'
        value={colorSeleccionado}
        onChange={handleColorChange}
        style={ { width: '40px', height: '40px'}}
        />
        <div>
            <h4>Historial de colores</h4>
            <ul>
                {historialColores.current.map((color, index) => (
                    <li key={index} style={{ backgroundColor: color, width: '30px', height: '30px', display: 'inline-block', margin: '2px' }}>{color}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default ColoresSelector