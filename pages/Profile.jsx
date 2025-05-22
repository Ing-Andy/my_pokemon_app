
import { ChevronDown, ChevronUp } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import GetOnePokemon from "../Api/GetOnePokemon";
import '../public/Profile.css'

export default function Profile(){
    const { nom } = useParams()
    const { pokemon, loading, error } = GetOnePokemon(nom);
    const [isclicked, setIsclicked] = useState(true)
  console.log(pokemon)
  
  const onclick = (e) => {
    setIsclicked(!isclicked)
  }


  if (!pokemon) return <p>loading ......</p>;

  return(
    <div className = "Profile">
      <header>
        <h2>{pokemon.name}</h2>
      </header>
      <main>
         <section className = "section1">
          <img src={pokemon.sprites.other.dream_world.front_default} alt="image du pokemon"/>
         </section>
         <section className = "section2">
            <div className="info1 info">
                {isclicked ? (
                    <p>Abilititee :{pokemon.abilities[0].ability.name} <ChevronDown onClick={onclick}/></p>
                ):(
                    <>
                        {pokemon.abilities.map((a,index) => (
                            <p key={index}><span>Abilititee :</span><span>{a.ability.name} <ChevronUp onClick={onclick}/></span></p>
                        ))}
                    </>
                )}
            </div>
            <div className="info2 info">
                <p>vos states sont la </p>
            </div>
         </section>
      </main>
    </div>
  )
}