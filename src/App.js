import logo from './imagenes/freecodecamp-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className="freecodecamp-logo" alt="Logo de freeCodeCamp" />
      </div>
    </div>
  );
}

export default App;
