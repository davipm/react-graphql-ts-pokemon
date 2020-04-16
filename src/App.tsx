import React, { useEffect } from "react";
import AOS from "aos";

import Global from "./styles/Global";
import Pokemons from "./components/Pokemons";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Pokemons />
      <Global />
    </div>
  );
}

export default App;
