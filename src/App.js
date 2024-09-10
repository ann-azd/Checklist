import logo from './logo.svg';
import './App.css';
import imagen from './imagenes/OIG1.jpg'

import ListaTareas from './components/listaT.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-imag'>
        <img className='img-p' src={imagen} />
        <p className='parra'  >Checklist de la Piña Colada Stinky</p>
      </div>

      <div className='lista-tareas'>
        <h1>Tareas especificas</h1>
        <ListaTareas />
      </div>

    </div>
  );
}

export default App;
