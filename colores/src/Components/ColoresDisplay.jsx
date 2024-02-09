import React, { useContext } from 'react'
import { ColoresContext } from './ColoresContexto'

const ColoresDisplay = () => {

    //llamamos al contexto
    const { colorSeleccionado } = useContext(ColoresContext)


    //NOTA: Se puede establecer que el color del texto cambie a negro o blanco, pero llevaria mas lineas de codigo
    //no siendo el objetivo de este ejercicio.
  return (
    <div style={{backgroundColor: colorSeleccionado, width: '400px', height: '50px', display: 'flex', padding: '20px', alignItems: 'center', color: 'black',}}>
        Color desplegado: {colorSeleccionado}
    </div>
  )
}

export default ColoresDisplay