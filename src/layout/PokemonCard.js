import React from 'react'

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
    <div>
        
        <h3> {name} </h3>
        <img src={pokemonImg} />

    </div>
  )
}

export default Pokemon