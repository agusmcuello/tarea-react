import React from "react";
import "./lista.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

function Lista({ tareas, borrarTarea, editarTarea }) {
  const [valorTextField, setValorTextField] = useState("");

  const onChangeTextField = (ev) => {
    ev.persist();
    setValorTextField(ev.target.value);
  };

  const ordenarTareas = tareas.sort((a, b) => {
    if (a.prioridad === b.prioridad) {
      return a.fecha - b.fecha;
    }
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

  const habilitarEdicion = (tarea) =>{
    tarea.editar=!tarea.editar;
    editarTarea(tarea);
}

const onSubmitEdicion = (tarea) =>{
  tarea.description=valorTextField;
  editarTarea(tarea);
}

  const mostrarTarea = ordenarTareas.map((tarea) => (
    <div className={tarea.prioridad}>
      <li
        onClick={() => borrarTarea(tarea)}
        key={tarea.id}
        style={{ textDecoration: tarea.terminada ? "line-through" : "none" }}
      >
        {tarea.description} 
      </li>
      <Button variant="contained" size="small" onClick={()=>habilitarEdicion(tarea)}>Editar</Button>
      <input
        className="check"
        checked={tarea.terminada}
        onChange={() => apretarCheckbox(tarea)}
        type="checkbox"
        name=""
        id=""
      />
      <div key={"hola"} className="form-edit" style={{display:tarea.editar?"block":"none"}}>
      <TextField onChange={onChangeTextField} id="standard-basic" label="Editar tarea" variant="standard" value={valorTextField} />
      <Button variant="outlined" size="small" onClick={()=>onSubmitEdicion(tarea)}>OK</Button>      
      </div>
    </div>
  ));

  return (
    <>
      <h3>Tareas</h3>
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
