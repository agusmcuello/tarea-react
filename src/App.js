
import './App.css';
import Form from './componentes/Form/Form';
import { useState } from 'react';
import Lista from './componentes/Lista/Lista';


function App() {
  const [lista, setLista] = useState([])
  const agregarElemento=(elementoAAgregar)=>{
    setLista([...lista,elementoAAgregar])
  };
 const borrarTarea=(elementoAQuitar)=>{
  const listaFiltrada = lista.filter((element)=> element.description !== elementoAQuitar)
  setLista(listaFiltrada)
 }


  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>
        <Form agregarElemento={agregarElemento}/>
        <Lista tareas={lista} borrarTarea={borrarTarea}/>
      </main>
    </div>
  );
}

export default App;
