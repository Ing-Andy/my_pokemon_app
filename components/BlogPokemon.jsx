import React from 'react'
import '../styles/BlogPokemon.css'

export default function BlogPokemon({nom,abilitie,image}) {
  return (
    <div className='BlogPokemon' >
        <div>
            <h4 className='h4'>{nom}</h4>
            <p>{abilitie}</p>
        </div>
        <div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}
