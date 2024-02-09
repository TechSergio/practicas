import React, { createContext, useState } from 'react'

//creamos el contexto
const ColoresContext = createContext();

//creamos el proveedor
const ColoresProvider = (({ children }) => {

    //estado de color seleccionado, si no se selecciona queda negro
    const [colorSeleccionado, setColorSeleccionado] = useState('#FFFFFF');

    return(
        <ColoresContext.Provider value={ {colorSeleccionado, setColorSeleccionado} }>
            {children}
        </ColoresContext.Provider>
    )
})

export {ColoresProvider, ColoresContext}