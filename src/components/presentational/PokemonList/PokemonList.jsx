import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}
