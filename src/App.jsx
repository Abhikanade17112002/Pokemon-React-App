import React, { useState } from 'react'
import Heading from './Components/Heading/Heading'
import SearchBox from './Components/SearchBox/SearchBox'
import PokemonCardsContainer from './Components/PkemonCardsContainer/PokemonCardsContainer'
import Loading from './Components/Loading/Loading'

const App = () => {

  const [ searchKey , setSearchKey ] = useState("") ;
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className='w-full py-6 px-6 bg-gray-300'>
      <Heading></Heading>
      <SearchBox   searchKey={searchKey} setSearchKey={setSearchKey}    ></SearchBox>
      <PokemonCardsContainer  pokemons={pokemons} setPokemons={setPokemons}  searchKey={searchKey} ></PokemonCardsContainer>
    </div>
  )
}

export default App