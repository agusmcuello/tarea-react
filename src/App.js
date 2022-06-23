import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AgregarTarea from "./pages/AgregarTarea";
import ListaDeTareas from "./pages/ListaDeTareas";
import { PaginaPrincipal } from "./pages/PaginaPrincipal";


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
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<PaginaPrincipal/>}/>
      <Route path='AgregarTarea' element={<AgregarTarea agregarElemento={agregarElemento}/>}/>
      <Route  path="ListaDeTareas" element={<ListaDeTareas tareas={lista} borrarTarea={borrarTarea} editarTarea={editarTarea}/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
