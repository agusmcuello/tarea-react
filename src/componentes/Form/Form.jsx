import React from "react";
import "./form.css";
import { useState } from "react";

const Form = ({ agregarElemento }) => {
  const [valorInput, setValorInput] = useState("");
  const [valorPrioridad, setValorPrioridad] = useState("");

  const botonDeshabilitado = !valorInput || !valorPrioridad;
  const onInputChange = (ev) => {
    ev.persist();
    setValorInput(ev.target.value);
  };

  const seleccionarPrioridad = (ev) => {
    setValorPrioridad(ev.target.value);
  };

  const onFormSubmit = () => {
    agregarElemento({ description: valorInput, prioridad: valorPrioridad });
  };
  return (
    <div>
      <input
        onChange={onInputChange}
        value={valorInput}
        id="tarea"
        type="text"
        name="tarea"
        placeholder="Descripción de la tarea"
      />
      <select
        name="prioridad"
        id="prioridad"
        value={valorPrioridad}
        onChange={seleccionarPrioridad}
      >
        <option value="" disabled>
          Prioridad
        </option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button onClick={onFormSubmit} disabled={botonDeshabilitado} id="agregar">
        Agregar!
      </button>
    </div>
  );
};

export default Form;
