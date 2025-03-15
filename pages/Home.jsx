import React from 'react'
import GetPokemon from '../Api/GetPokemon'

export default function Home() {
    const yo = GetPokemon()
  return (
    <div>
        <p> Andy est le meilleur </p>
    </div>
  )
}
