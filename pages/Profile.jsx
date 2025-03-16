
import { useParams } from "react-router-dom";
import GetOnePokemon from "../Api/GetOnePokemon";
import '../public/Profile.css'

export default function Profile(){
    const { nom } = useParams()
    const { pokemon, loading, error } = GetOnePokemon(nom);
  // if(loading) return <p>loading ....</p>
  console.log(pokemon)
  
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
                <p>vos info sont sense etre la</p>
            </div>
            <div className="info2 info">
                <p>vos states sont la </p>
            </div>
         </section>
      </main>
    </div>
  )
}