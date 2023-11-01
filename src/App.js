import logo from './imagenes/freecodecamp-logo.png';
import './App.css';
import Boton from './componentes/Boton';

function App() {

  const manejarClic = () => {
    console.log('Se hizo click')
  }

  const reiniciarClic = () => {
    console.log('Se hizo click en reiniciar')
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className="freecodecamp-logo" alt="Logo de freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>

        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}/>

        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={manejarClic}/>

      </div>
    </div>
  );
}

export default App;
