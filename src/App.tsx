import React, { useEffect } from "react";
import AOS from "aos";

import Global from "./styles/global";
import Pokemons from "./components/Pokemons";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div id="app">
      <Pokemons />
      <Global />
    </div>
  );
}

export default App;
