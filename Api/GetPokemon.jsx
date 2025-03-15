import React from 'react'

export default function GetPokemon() {
  const GetPokemon = async () => {
    const get = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    const pokemons = await get.json();
    const results = pokemons.results
    console.log(results)
  }
  return GetPokemon()
}
