import React from 'react'
import '../public/BlockPokemon.css'


export default function BlockPokemon({nom,type,level,image}) {
  return (
    <div className='Block'>
        <div className="cote1">
            <h3>{nom}</h3>
            <p><span>type :{type}</span><br /><span>level:{level}</span></p>
        </div>
        <div className="cote2">
            <img src={image} alt={nom} />
        </div>
    </div>
  )
}
