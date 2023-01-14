import './App.css'
import Navbar from './layout/Navbar'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Home from './pages/Home'
import Types from './pages/Types'
import Pokemon from './pages/Pokemon'

function App(){

  const [loading, setLoading] = useState([])
  const typeUrl = `https://pokeapi.co/api/v2/type/`
  const [typesNames, setTypesNames] = useState([])
  const [pokemon, setPokemon] = useState([])

  const getTypes = async (url) => {

      setLoading(true)
      let res = await fetch(url);
      let data = await res.json();
      
      data.results.pop()
      data.results.pop()

      let array = []

      data.results.map((index) => (array.push(index.name)))

      setTypesNames(array)

      setLoading(false)

  };

  useEffect(() => {

      getTypes(typeUrl)

  }, [])

  function setNewPokemon(pokemon){

    setPokemon(pokemon)

  }

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home typesNames={typesNames}/>}/>
        {typesNames.length > 0 && typesNames.map(type => (<Route key={Math.random()} path={`type/${type}`} element={<Types type={type} pokemon={pokemon} setNewPokemon={setNewPokemon}/>} />))}
        {pokemon.length > 0 && pokemon.map(pokemon => (<Route key={Math.random()} path={`/${pokemon}`} element={<Pokemon pokemon={pokemon}/>} />))}

      </Routes>
      
    </Router>

  );

}

export default App;
