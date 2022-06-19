
import './App.css';
import Form from './componentes/Form/Form';
import { useState } from 'react';
import Lista from './componentes/Lista/Lista';


function App() {
  const [lista, setLista] = useState([])
  const agregarElemento=(elementoAAgregar)=>{
    setLista([...lista,elementoAAgregar])
  }
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>
        <Form agregarElemento={agregarElemento}/>
        <Lista tareas={lista}/>
      </main>
    </div>
  );
}

export default App;
