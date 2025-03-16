// import React from 'react'
// import { useParams } from 'react-router-dom'

// export default function GetPokemon() {
//     const { nom } = useParams()
//   const GetPokemon = async () => {
//     const get = await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`)
//     const pokemons = await get.json();
//     console.log(pokemons)
//   }
//   return GetPokemon()
// }
import { useState, useEffect } from "react";

export default function useGetOnePokemon(nom) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`);
        if (!response.ok) throw new Error("Pokémon introuvable !");
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [nom]);

  return { pokemon, loading, error };
}
