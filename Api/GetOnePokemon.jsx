import React from 'react'

export default function GetPokemon({nom}) {
  const GetPokemon = async () => {
    const get = await fetch(`https://pokeapi.co/api/v2/pokemon?${nom}`)
    const pokemons = await get.json();
    const results = pokemons.results
    console.log(results)
  }
  return GetPokemon()
}
