import React from "react";
import "./lista.css";

function Lista({ tareas }) {
  return (
    <>
      <h3>Tareas</h3>
      <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      <ul id="lista-tareas">{tareas.toString()}</ul>
      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
}

export default Lista;
