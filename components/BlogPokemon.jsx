import React from 'react'
import '../styles/BlogPokemon.css'

export default function BlogPokemon({nom,image,font}) {
  return (
    <div className='BlogPokemon' style={{backgroundImage:`${font}`}}>
        <div>
            <h4 className='h4'>{nom}</h4>
            <p>{nom}</p>
        </div>
        <div className='image'>
            <img src={image} alt=" image" />
        </div>
    </div>
  )
}
