import React from 'react';
import Global from "./styles/Global";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <div className="App">
      <Pokemons />
      <Global />
    </div>
  );
}

export default App;
