import React, { useEffect, useState } from 'react'
import ListePokemon from '../Api/ListePokemon'
import BlogPokemon from '../components/BlogPokemon'
import '../styles/Home.css'
// import Header from '../components/Header';

export default function Home() {
        const listeData = ListePokemon();
        const [namePokemon,setNamePokemon] = useState([]) 
        console.log(namePokemon);
        console.log(listeData);
        // console.log(listeData[0].abilities[0]);   
        // console.log(listeData[0].abilities);
        const [valeur,setValeur] = useState('');
        const handleChange = (event) => {
            setValeur(event.target.value);
        }
        const handleClick = () => {
            console.log("recherche aboutie a :",valeur);
            handleChange('');
            return valeur;
        }
return (
    <div className='Home'>
        <div className='Header' >
            <img src="/image/photoblanche.jpg" alt="yep" />
            <div className="search">
                <input type="search" onChange={handleChange} value={valeur} placeholder='name for pokemon ...' />
                <input className='submit' type="submit"  value="search" onClick={handleClick} />
            </div>
        </div>
        {valeur === '' ?<ul className='ul'>
            {listeData.map((pokemon,index) => (
                <li key={index}><BlogPokemon nom={pokemon.nom} abilitie={pokemon.abilitie} image={pokemon.specie} /></li>
            ))}
        </ul> : <p> pas de pokemon de ce nom</p>}
    </div>
  )
}
