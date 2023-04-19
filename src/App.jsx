import './App.css';
import Pokemon from './components/Pokemon';
import PokemonListContainer from './components/container/PokemonListContainer';

export default function App() {
  // App with Container / Presentational Pattern
  return <PokemonListContainer />;

  // App without Container / Presentational Pattern
  //return <Pokemon />;
}
