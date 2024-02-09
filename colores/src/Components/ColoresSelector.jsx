import React, { useContext } from 'react'
import { ColoresContext } from './ColoresContexto'

const ColoresSelector = () => {

    //invocamos al contexto
    const { colorSeleccionado, setColorSeleccionado} = useContext(ColoresContext)

    const handleColorChange = (evento) => {
        setColorSeleccionado(evento.target.value)
    }
  return (
    <>
        <input
        type='color'
        value={colorSeleccionado}
        onChange={handleColorChange}
        style={ { width: '40px', height: '40px'}}
        />
    </>
  )
}

export default ColoresSelector