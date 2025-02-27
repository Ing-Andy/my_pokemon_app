import React, { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
    const [valeur,setValeur] = useState('');
    const handleChange = (event) => {
        setValeur(event.target.value);
    }
    const handleClick = () => {
        
    }
  return (
    <div className='Header' >
        <img src="/image/photoblanche.jpg" alt="yep" />
        <div className="search">
            <input type="search" onChange={handleChange} value={valeur} placeholder='name for pokemon ...' />
            <input className='submit' type="submit"  value="search" />
        </div>
    </div>
  )
}
