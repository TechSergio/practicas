import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColoresDisplay from './Components/ColoresDisplay'
import ColoresSelector from './Components/ColoresSelector'

function App() {



  return (
    <>
      <div style={{backgroundColor: 'black',  border: '4px dotted white', padding: '80px 40px 270px'}} >
          <h1 style={{fontSize: '2.5em'}}>Seleccionador de colores</h1>
          <div style={{display: 'flex', justifyContent: 'center', gap: '10px', }} >
          <ColoresDisplay/>
          <ColoresSelector/>
        </div>
        <p>Explora la paleta de colores y elige el que mejor se adapte a tus preferencias.</p>
      </div>
    </>
  )
}

export default App
