import React from "react";
import "./lista.css";

function Lista({ tareas, borrarTarea }) {
  const mostrarTarea = tareas.map((tarea) => (
    <li onClick={() => borrarTarea(tarea)} key={tarea.description}>
      {tarea.description}
    </li>
  ));
  return (
    <>
      <h3>Tareas</h3>
      <p
        id="mensaje-lista-vacia"
        style={{ display: tareas.length ? "none" : "block" }}
      >
        Parece que no hay nada por aquí!
      </p>
      <ul id="lista-tareas">{mostrarTarea}</ul>
      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
}

export default Lista;
