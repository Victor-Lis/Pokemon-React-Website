import React from 'react'

import './PokemonCard-module.css'

import {useState, useEffect} from 'react'

const Pokemon = ({name}) => {

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`

  const [pokemonImg, setPokemonImg] = useState()

  const getImg = async (name) => {

    let resp = await fetch(pokemonUrl+name)
    let data = await resp.json()

    setPokemonImg(data.sprites.front_default)

  }

  useEffect(() => {

    getImg(name)

  }, [])    

  return (
    <div className='pokemon-card'>
        
        <h2 className='pokemon-card-name'> {name} </h2>
        <img className='pokemon-card-img' src={pokemonImg} />

    </div>
  )
}

export default Pokemon