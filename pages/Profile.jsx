import GetOnePokemon from "../Api/GetOnePokemon"
import { useParams } from "react"

export default function Profile(){
  const { nom } = useParams()
  const thisPokemon = GetOnePokemon(nom);
  if(!thisPokemon){
     <p>loading ....</p>
  }
  return(
    <div className = "Profile">
      <header>
        <h2>{thisPokemon[0].name}</h2>
      </header>
      <main>
         <section className = "section1"><img src={thisPokemon[0].sprities.other.svg} alt="image du pokemon"</section>
         <section classement = "section2">
            
         </section>
      </main>
    </div>
  )
}