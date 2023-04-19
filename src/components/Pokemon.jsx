import { useState, useEffect } from 'react';

export default function Pokemon() {
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

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="card-container">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="description-container">
            <div className="pokemon-description">
              <h1>{pokemon.name}</h1>
              <div className="types">
                {pokemon.types.map((type, index) => (
                  <div className="type-chip" key={index}>
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="stats">
              <p>hp : {pokemon.stats[0].base_stat}</p>
              <p>attack : {pokemon.stats[1].base_stat}</p>
              <p>defense : {pokemon.stats[2].base_stat}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
