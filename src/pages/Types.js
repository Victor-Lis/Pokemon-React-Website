import { useState, useEffect } from 'react'

import PokemonCard from '../layout/PokemonCard'

const Types = ({type}) => {

  const getPokemonUrl = `https://pokeapi.co/api/v2/type/`

  const [pokemon, setPokemon] = useState([])
  const [pokemonIds, setPokemonIds] = useState([])

  const getPokemon = async (type) => {

    let resp = await fetch(getPokemonUrl+type)
    let data = await resp.json()

    let arrayNames = []
    let arrayIds = []

    data.pokemon.map(index => arrayNames.push(index.pokemon.name) )

    setPokemon(arrayNames)

  }

  useEffect(() => {

    getPokemon(type)

  }, [])

  return (
    <div> 
      
      <h1> {type} </h1> 
    
      {pokemon.length > 0 && 
      
        pokemon.map(pokemon => <PokemonCard key={Math.random()} name={pokemon} />) 
      
      }
    
    </div>
  )
}

export default Types