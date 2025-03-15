
import { useParams } from "react-router-dom";
export default function Profile(){
  const { nom } = useParams()
   const pokemons = GetOnePokemon(nom);
  // if(loading) return <p>loading ....</p>
  
  return(
    <div className = "Profile">
      <header>
        <h2>{pokemons[0].name}</h2>
      </header>
      <main>
         <section className = "section1">
          <img src={pokemons[0].sprities.other.svg} alt="image du pokemon"/>
         </section>
         <section className = "section2">
            
         </section>
      </main>
    </div>
  )
}