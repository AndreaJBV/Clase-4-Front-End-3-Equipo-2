import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './componentes/Card'

const nombre = "Juan"

function App() {
  return (
    <> 
      <Card nombre = {nombre} />
    </>
  )
}

export default App
