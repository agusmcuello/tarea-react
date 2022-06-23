import Lista from "../componentes/Lista/Lista";

const ListaDeTareas = (props) => {
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas</h1>
        <Lista {...props} />
      </main>
    </div>
  );
};

export default ListaDeTareas;
