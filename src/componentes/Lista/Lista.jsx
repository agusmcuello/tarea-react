import React from "react";
import "./lista.css";

function Lista({ tareas, borrarTarea }) {
  const quitarTarea = (ev) => {
    borrarTarea(ev.target.firstChild.data);
  };
  const mostrarTarea = tareas.map((tarea) => (
    <li onClick={quitarTarea} key={tarea.description}>
      {tarea.description}
    </li>
  ));
  return (
    <>
      <h3>Tareas</h3>
      <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      <ul id="lista-tareas">{mostrarTarea}</ul>
      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
}

export default Lista;
