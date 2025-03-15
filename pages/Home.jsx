import React from 'react'
import GetPokemon from '../Api/GetPokemon'

export default function Home() {
  const yo = GetPokemon()
  if(!yo){
    <p>loading.....</p>
   }
  return (
    <div>
       {yo.map(pokemon => (
         <BlockPokemon nom={pokemon.name} type={pokemon.type} level={pokemon. level} image={pokemon.spreties.other.svg}  />
       )}
    </div>
  )
}
