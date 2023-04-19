import './PokemonCard.css';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="card-container">
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
  );
}
