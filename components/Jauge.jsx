import React from 'react'

export default function Jauge({taille}) {
    
  return (
    <div style={{width:'100px',height:'20px',background:`linear-gradient(to right,yellow ${taille}%,white ${100-taille}%)`,boxShadow:'0px 0px 10px 0px rgba(255, 255, 0, .9)'}}></div>
  )
}
