import React from "react";
import "./lista.css";

function Lista({ tareas, borrarTarea }) {
  console.log(tareas);
  const mostrarTarea = tareas.map((tarea) => (
    <li
      className={tarea.prioridad}
      onClick={() => borrarTarea(tarea)}
      key={tarea.description}
    >
      {tarea.description}
    </li>
  ));
  console.log(tareas);
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
