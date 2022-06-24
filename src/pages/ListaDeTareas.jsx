import Lista from "../componentes/Lista/Lista";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ListaDeTareas = (props) => {
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas</h1>
        <Lista {...props} />
        <Link className="link" to="/AgregarTarea">
          <Button>Agregar nueva tarea</Button>
        </Link>{" "}
      </main>
    </div>
  );
};

export default ListaDeTareas;
