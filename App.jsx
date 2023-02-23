import { useState, createContext } from "react";
import "./App.css";
import Home from "./components/Home";
export const Context = createContext();

function App() {
  const [user, setUser] = useState( "Username");
  
  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
        <Home />
      </Context.Provider>
    </div>
  );
}

export default App;
