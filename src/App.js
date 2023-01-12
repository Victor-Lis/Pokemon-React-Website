import './App.css'
import Navbar from './layout/Navbar'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Home from './pages/Home'

function App(){

    const typeUrl = `https://pokeapi.co/api/v2/type/`
    const pokemonByTypeUrl = `https://pokeapi.co/api/v2/type/`
    const pokemonToGetId = `https://pokeapi.co/api/v2/pokemon/`

    const [loading, setLoading] = useState([])
    const [typesNames, setTypesNames] = useState([])
    const [pokemonByTypes, setPokemonByTypes] = useState([])
    const [idByPokemonByTypes, setIdByPokemonByTypes] = useState([])

    /* 
    
    
    PRECISO
    FAZER
    UM 
    OBJETO
    PARA
    CONTROLAR
    ISSO

    
    */

    const getTypes = async (url) => {

      setLoading(true)
      let res = await fetch(url);
      let data = await res.json();
      
      let array = []

      data.results.map((index) => (array.push(index.name)))

      // console.log(data)

      setTypesNames(array)

      setLoading(false)

    };

    // const getPokemonByTypes = async (url) => {

    //   setLoading(true)

    //   let res = await fetch(url);
    //   let data = await res.json();

    //   let namesArray = []
    //   let idsArray = []

    //   data.pokemon.map((index) => (namesArray.push(index.pokemon.name)))

    //   data.pokemon.map((index) => (idsArray.push(index)))

    //   setPokemonByTypes(namesArray)
    //   setIdByPokemonByTypes(idsArray)

    //   console.log(namesArray)
    //   console.log(idsArray)

    //   setLoading(false)

    // }

    useEffect(() => {

      getTypes(typeUrl)

    }, [])

    // useEffect(() => {

    //   typesNames.map((name) => (getPokemonByTypes(`${pokemonByTypeUrl}${name}`)))

    // }, [typesNames])

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/categorys" element={<p>Categorys</p>}/>

      </Routes>
      
    </Router>

  );

}

export default App;
