import React from 'react'
import { useState, useEffect } from 'react';

export default function GetPokemon() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const donne = await response.json();
        const results = await Promise.all(donne.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        }));
        setData(results);
      };
      fetchData();
    }, []);
  console.log(data);
  return data;
}
