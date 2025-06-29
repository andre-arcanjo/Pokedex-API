import { ListOfPokemons } from './components/ListOfPokemons.jsx/ListOfPokemons'
import { PokemonDetails } from './components/PokemonDetails/PokemonDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';

function App() {

  return (
    <>
      <ThemeToggleButton />
      <BrowserRouter basename='/Pokedex-API'>
        <Routes>
          <Route path='/' element={<ListOfPokemons />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
