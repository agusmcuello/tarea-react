import Form from "../componentes/Form/Form";

const AgregarTarea = (props) => {
  return (
    <div className="App">
      <main>
        <h1>Agregar tarea</h1>
        <Form {...props} />
      </main>
    </div>
  );
};

export default AgregarTarea;
