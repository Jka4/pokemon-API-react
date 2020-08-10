import React, { useEffect, lazy, Suspense, useState } from "react";
import Loader from 'react-loader-spinner'
import axios from 'axios';
import HeaderLine from "@HeaderLine";
import { Link } from "react-router-dom";

import './styles/style.scss';

const ImageContainer = lazy(() => import('@ImageContainer'));

const AllPokemonsPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  const fetchAllPokemons = async () => {
    const howMuchToDownload = 40;

    for (let i = pokemonCount + 1; i <= pokemonCount + howMuchToDownload; i++) {
      const URL = `https://pokeapi.co/api/v2/pokemon/${i}/`;
      await axios.get(URL)
        .then(async (response) => {
          setPokemons(pokemons => [...pokemons, response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setPokemonCount(pokemons.length + howMuchToDownload)
  }

  const loadNext = () => {
    fetchAllPokemons();
  }

  return (
    <React.Fragment>
      <HeaderLine />
      <Link to='/' className='backToMainPage' > Back </Link>

      <section className='main'>
        <div className="allPokemonsWrapper"  >
          {pokemons.map((index, key) => (
            <div className="smallPokemonCard" key={index + Math.floor(1 + Math.random() * 9999999999)} >
              <div className="pokemonLogo">
                <Suspense fallback={<Loader type="TailSpin" height={90}
                  width={110} color={"red"}
                />}>
                  <ImageContainer url={index?.sprites?.front_default} />
                </Suspense>
              </div>
              <div className="pokemonName">{index?.name} {index?.id}</div>
            </div>
          ))}
        </div>
        <button className="loadNext" onClick={loadNext} >Load Next</button>
      </section>
    </React.Fragment>
  )
}

export default AllPokemonsPage;