import React from 'react'
import '../styles/Profile.css'
import ListePokemon from '../Api/ListePokemon'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Profile() {
  const { nom } = useParams(); 
  
  const listedata = ListePokemon();
  console.log(listedata);
 
  const pokemons = listedata.filter((pokemon) => {
    return pokemon.name === nom;
  });
  
  return (
    <div className='Profile'>
        <div className="container"> 
          <header>
            {!pokemons ? <h1>Chargement...</h1> : (
              <div>
              <div>
              <h4>{pokemons?.name}</h4>
              <div>
                <p>{pokemons?.type}</p>
                <p>{pokemons?.order}</p>
              </div>
            </div>
            <div>
              <img src={pokemons?.sprites.other.dream_world.front_default} alt="image" />
            </div>
            </div>
            )}
            
            
            hayaaa
          </header>
          <section>
              <table>
                
              </table>
          </section>
        </div>
    </div>
  )
}
