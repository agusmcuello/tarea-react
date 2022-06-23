import React from "react";
import { Link } from "react-router-dom";

export const PaginaPrincipal = () => {
  return (
    <div className="App">
      <main>
        <h1>¡Bienvenidos a la Lista de Tareas!</h1>
        <nav>
          <Link className="link" to="/AgregarTarea">
            Agregar tarea
          </Link>{" "}
          |{" "}
          <Link className="link" to="/ListaDeTareas">
            Lista de tareas
          </Link>
        </nav>
      </main>
    </div>
  );
};
