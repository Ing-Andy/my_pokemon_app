import React, { useEffect, useState } from "react";
import ListePokemon from "../Api/ListePokemon";
import BlogPokemon from "../components/BlogPokemon";
import "../styles/Home.css";
// import Header from '../components/Header';

export default function Home() {
  const listeData = ListePokemon();
  const search = [];
  const [namePokemon, setNamePokemon] = useState([]);
  const [valeur, setValeur] = useState("");
  const handleChange = (event) => {
    setValeur(event.target.value);
  };
  const handleClick = () => {
    console.log("recherche aboutie a :", valeur);
    handleChange("");
    return valeur;
  };
  const searchPokemon = listeData.filter((pokemon) => {
    return pokemon.name.includes(valeur);
  });
  return (
    <div className="Home">
      <div className="Header">
        <img src="/image/photoblanche.jpg" alt="yep" />
        <div className="search">
          <input
            type="search"
            onChange={handleChange}
            value={valeur}
            placeholder="name for pokemon ..."
          />
          <input
            className="submit"
            type="submit"
            value="search"
            onClick={handleClick}
          />
        </div>
      </div>
      <ul className="ul">
        {searchPokemon.map((index) => (
          <li key={index}>
            <BlogPokemon
              nom={index.name}
              level={index.order}
              font={index.sprites.front_default}
              type={index.types[0].type.name}
              image={index.sprites.other.dream_world.front_default}
              id="id"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
