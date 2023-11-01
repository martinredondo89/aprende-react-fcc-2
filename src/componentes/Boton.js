import React from 'react';
import '../hojas-de-estilo/Boton.css';
//Desestructuracion {} en vez de props
function Boton({ texto, esBotonClic,manejarClic }) {
    return (
        <button
            className={ esBotonClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}>
            {texto}
        </button>
    );
}
export default Boton;