import { createContext, useContext } from "react";

const Context = createContext("valor por defecto");

const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

function App() {
  return <div>Hola mundo</div>;
}

export default App;
