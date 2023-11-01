import logo from './imagenes/freecodecamp-logo.png';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
//Hooks
import { useState } from 'react';

function App() {
  const [numClics,setNumClics] = useState(0)
  
  const manejarClic = () => {
    setNumClics(numClics+1);
  }

  const reiniciarClic = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className="freecodecamp-logo" alt="Logo de freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic} />

        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarClic} />

      </div>
    </div>
  );
}

export default App;
