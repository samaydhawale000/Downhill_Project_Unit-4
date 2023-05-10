import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();
function ContextUse({ children }) {
  const [login, setLogIn] = useState(false);
  const [name, setName] = useState("");

  function loginHandle(name) {
    setLogIn(true);
    setName(name)
  }

  

  return (
    <AppContext.Provider value={{ login, loginHandle,name }}>
      {children}
    </AppContext.Provider>
  );
}
export default ContextUse;
