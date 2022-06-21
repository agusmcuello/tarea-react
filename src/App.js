import "./App.css";
import Form from "./componentes/Form/Form";
import { useState } from "react";
import Lista from "./componentes/Lista/Lista";

function App() {
  const [lista, setLista] = useState([]);
  const agregarElemento = (elementoAAgregar) => {
    setLista([...lista, elementoAAgregar]);
  };
  const borrarTarea = (elementoAQuitar) => {
    const listaFiltrada = lista.filter(
      (element) => element.id !== elementoAQuitar.id
    );
    setLista(listaFiltrada);
  };

  const editarTarea = (elementoAEditar) => {
    // encontrar el indice del elemento a editar por id
    // al elemento que se encuentra en ese indice, asignarle los valores de elementoAEditar
    const indiceAEditar = lista.findIndex(
      (elemento) => elemento.id === elementoAEditar.id
    );
    const listaEditada = [...lista];
    lista[indiceAEditar] = { ...elementoAEditar };
    setLista(listaEditada);
  };

  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>
        <Form agregarElemento={agregarElemento} />
        <Lista
          tareas={lista}
          borrarTarea={borrarTarea}
          editarTarea={editarTarea}
        />
      </main>
    </div>
  );
}

export default App;
