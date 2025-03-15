import React from 'react'
import '../public/BlockPokemon.css'
import { Link } from 'react-router-dom'


export default function BlockPokemon({nom,type,level,image}) {
  return (
    <div className='Block'>
        <div className="cote1">
            <h3>{nom}</h3>
            <p><span>type :{type}</span><br /><span>level:{level}</span></p>
            <div className='detail'><link to={nom}>details</link></div>
        </div>
        <div className="cote2">
            <img src={image} alt={nom} />
        </div>
    </div>
  )
}
