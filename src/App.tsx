import AOS from "aos";
import React, { useEffect } from "react";

import PokemonList from "@/components/PokemonList";

import Global from "./styles/global";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div id="app">
      <PokemonList />
      <Global />
    </div>
  );
}
