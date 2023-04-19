import { useState, useEffect } from 'react';
import PokemonList from '../presentational/PokemonList/PokemonList';

export default function PokemonListContainer() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsLinks = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((response) => response.json())
        .then((response) => response.results);

      const pokemons = await Promise.all(
        pokemonsLinks.map((pokemon) => fetch(pokemon.url).then((response) => response.json()))
      );
      setPokemons(pokemons);
    };

    fetchPokemons().catch(console.error);
  }, []);

  if (!pokemons) return null;

  return <PokemonList pokemons={pokemons} />;
}
