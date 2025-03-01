import React from 'react'
import '../styles/BlogPokemon.css'
import { Link, NavLink } from 'react-router-dom'


export default function BlogPokemon({nom,type,level,image,font}) {
  return (
    <div className='BlogPokemon' style={{backgroundImage:`${font}`}}>
        <div>
            <h3 className='h3'>{nom}</h3>
            <p>type :{type} <br /> &nbsp;&nbsp;&nbsp;&nbsp; level : {level}
            </p>
        <h4 className='h4'><NavLink className='navlink' to={`/profil`}>Details</NavLink></h4>
        </div>
        <div className='image'>
            <img src={image} alt=" image" />
        </div>
    </div>
  )
}
