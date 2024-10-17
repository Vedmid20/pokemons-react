import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../PokemonDetail.css';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        setPokemon(res.data);
      });
  }, [id]);

  return (
    <main>
    <div className='pokemonDetail'>
      <h1>{pokemon?.name}</h1>
      {pokemon && (
        <>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
          <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
          <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </>
      )}
    </div></main>
  );
};

export default PokemonDetail;
