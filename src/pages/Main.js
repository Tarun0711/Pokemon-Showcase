import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import "../App.css";

export const Main = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [more,setLoadMore]=useState(10);
  const showMoreItems =()=>{
    setLoadMore((prevValue)=>prevValue+10)
  }

  const getAppPokemon = async (more) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?`);
    const data = await res.json();
    function createPokemon(x) {
      Promise.all(
        x.map(async (item, index) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${item.name}`
          );
          const result = await response.json();
          return result;
        })
      ).then((results) => {
        setAllPokemon((prev) => [...prev, ...results]);
      });
    }
    createPokemon(data.results);
  };

  useEffect(() => {
    getAppPokemon();
  }, [setLoadMore])
  
  return (
    <div className="MainContainer">
      <ul className="container">
        {allPokemon &&
          allPokemon.slice(0,more).map((item, index) => (
            <Card
              name={item.name}
              number={index}
              img={item.sprites.other.dream_world.front_default}
              height={item.height}
              weight={item.weight}
             stta={ <li key={item.stat.name}>
            {item.stat.name}
          </li>}
              

            />
          ))}
      </ul>
      <button onClick={showMoreItems} >Load More</button>
    </div>
  );
};
