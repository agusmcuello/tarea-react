import "./form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

const Form = ({ agregarElemento }) => {
  const [open, setOpen] = React.useState(false);
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
    agregarElemento({
      description: valorInput,
      prioridad: valorPrioridad,
      id: uuidv4(),
      terminada: false,
      fecha: new Date(),
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      <Button
        variant="outlined"
        onClick={() => {
          handleClickOpen();
          onFormSubmit();
        }}
        disabled={botonDeshabilitado}
        id="agregar"
      >
        Ingresar
      </Button>
      <Link className="link" to="/ListaDeTareas">
        <Button>Ir a lista de Tareas</Button>
      </Link>{" "}
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tienes una nueva tarea"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Deseas revisar tu lista de tareas?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Quizas más tarde</Button>
          <Link className="link" to="/ListaDeTareas">
            <Button>De acuerdo</Button>
          </Link>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Form;
