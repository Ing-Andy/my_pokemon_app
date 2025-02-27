
import React, { useEffect, useState } from "react";

export default function ListePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const listeData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon");
      const liv = await data.json();
      const results = await Promise.all(
        liv.results.map(async (pokemon) => {
          const pokemonResponce = await fetch(pokemon.url);
          return pokemonResponce.json();
        })
      );
      setPokemon(results);
    };
    listeData();
  }, []);
//   console.log(pokemon);
  return pokemon;
}
