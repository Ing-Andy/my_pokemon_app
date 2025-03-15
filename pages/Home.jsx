import React from 'react'
import GetPokemon from "../Api/GetPokemon"
import BlockPokemon from '../components/BlockPokemon'
import '../public/Home.css'

export default function Home() {
  const details = GetPokemon();
  const [input, setInput] = React.useState('');
  console.log(details);
  if(!details) return <p> loading.....</p>
  const liste = details.filter(pokemon => pokemon.name.includes(input));
  return (
    <div>
      <header className='header'>
        <h1>Pok-Andy</h1>
        <div className='searchdiv'>
          <input type="text" placeholder='entrez le nom du pokemon' value={input} onChange={e => setInput(e.target.value)} />
          <button>Valide</button>
        </div>
      </header>
      <ul className="list">
          {liste.map((pokemon,index) => (
            <li key={index}><BlockPokemon nom={pokemon.name} type={pokemon.types[0].type.name} level={pokemon.base_experience} image={pokemon.sprites.other.dream_world.front_default}/></li>
          ))}
      </ul>
    </div>
  )
}
