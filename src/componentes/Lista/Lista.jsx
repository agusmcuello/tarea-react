import React from "react";
import "./lista.css";

function Lista({ tareas, borrarTarea, editarTarea }) {
  const ordenarTareas = tareas.sort((a, b) => {
    if (a.prioridad === "prioridad-alta") {
      return -1;
    }
    if (a.prioridad === "prioridad-baja") {
      return 1;
    }
    if (
      (a.prioridad === "prioridad-media") >
      (b.prioridad === "prioridad-baja")
    ) {
      return 1;
    }
    if (
      (a.prioridad === "prioridad-media") >
      (b.prioridad === "prioridad-alta")
    ) {
      return -1;
    }
    return 0;
  });

  const apretarCheckbox = (tarea) => {
    tarea.terminada = !tarea.terminada;
    editarTarea(tarea);
  };

  const cambiarDescripcion = (tarea) => {
    editarTarea(tarea);
  };

  const mostrarTarea = ordenarTareas.map((tarea) => (
    <div className="tarea">
      <li
        className={tarea.prioridad}
        onClick={() => borrarTarea(tarea)}
        key={tarea.id}
        style={{ textDecoration: tarea.terminada ? "line-through" : "none" }}
      >
        {tarea.description}
      </li>
      <button className="editar-tarea" onClick={editarTarea}>
        Editar Tarea
      </button>
      <input
        className="check"
        checked={tarea.terminada}
        onChange={() => apretarCheckbox(tarea)}
        type="checkbox"
        name=""
        id=""
      />
      <input type="text" />
    </div>
  ));

  return (
    <>
      <h3>Tareas</h3>
      {/* <p id="mensaje-lista-vacia" style={{display:tareas.length?"none":"block"}}>Parece que no hay nada por aquí!</p> */}
      {tareas.length === 0 ? (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      ) : (
        <>
          {" "}
          <ol id="lista-tareas">{mostrarTarea}</ol>
          <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
        </>
      )}
    </>
  );
}

export default Lista;
