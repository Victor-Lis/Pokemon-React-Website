import { useState, useEffect } from 'react'

import './Types-module.css'

import PokemonCard from '../layout/PokemonCard'

const Types = ({type, pokemon, setNewPokemon}) => {
  
  const getPokemonUrl = `https://pokeapi.co/api/v2/type/`

  const getPokemon = async (type) => {

    let resp = await fetch(getPokemonUrl+type)
    let data = await resp.json()

    let arrayNames = []

    data.pokemon.map(index => arrayNames.push(index.pokemon.name) )

    setNewPokemon(arrayNames)

  }

  useEffect(() => {

    getPokemon(type)

  }, [])

  return (
    <div className='type'> 
      
      <h3 className='title-type'> {type} </h3> 
    
      <div className='type-area'>

        {pokemon.length > 0 && 
      
          pokemon.map(pokemon => <PokemonCard key={Math.random()} name={pokemon} />) 
      
        }
    
      </div>

    </div>
  )
}

export default Types