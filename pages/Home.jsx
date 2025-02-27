import React, { useEffect, useState } from 'react'
import ListePokemon from '../Api/ListePokemon'
import BlogPokemon from '../components/BlogPokemon'
import '../styles/Home.css'
import Header from '../components/Header';

export default function Home() {
        const listeData = ListePokemon();
        const [namePokemon,setNamePokemon] = useState([]) 

        // for(let i = 0; i <= 500;i++){
        //     setNamePokemon(listeData[i].name);
        // }
        console.log(namePokemon);
        console.log(listeData);
        
  return (
    <div className='Home'>
        <Header />
        <ul className='ul'>
             {/* {listeData.map((pokemon,index) => (
                <li key={index}><BlogPokemon nom={pokemon.nom} abilitie={pokemon.abilitie} image={pokemon.specie} /></li>
            ))} */}
        </ul>
    </div>
  )
}
