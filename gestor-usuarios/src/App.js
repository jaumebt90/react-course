import { useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({ name: "" });
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <input name="name" placeholder="Nombre" value={formulario.name} />
    </form>
  );
}

export default App;
