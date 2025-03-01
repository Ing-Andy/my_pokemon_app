import React from 'react'
import '../styles/Profile.css'
import ListePokemon from '../Api/ListePokemon'

export default function Profile() {
  const listedata = ListePokemon();
  console.log(listedata[0]);
  return (
    <div>
        hello gay
    </div>
  )
}
