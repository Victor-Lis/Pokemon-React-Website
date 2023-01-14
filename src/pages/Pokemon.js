import React from 'react'
import { useState, useEffect } from 'react'

const Pokemon = ({pokemon}) => {

  const [pokemonDatas, setPokemonDatas] = useState({})

  const getPokemonDatasUrl = `https://pokeapi.co/api/v2/pokemon/`

  const getPokemonDatas = async (pokemon) => {

    let resp = await fetch(getPokemonDatasUrl+pokemon)
    let data = await resp.json()
 
    console.log(data)
    console.log(data.types.map(index => index.type.name))
    setPokemonDatas(data)    
    console.log(pokemonDatas.types.map(index => index.type.name))

  }

  useEffect(() => {

    getPokemonDatas(pokemon)

  }, [])

  return (
    <div> 
    
      <p> {pokemonDatas?.name}  </p>
      <p> {pokemonDatas?.id} </p>

    </div>
  )
}

export default Pokemon