import React from 'react'
import { useState, useEffect } from 'react'

import "./Pokemon-module.css"

const Pokemon = ({pokemon}) => {

  const [pokemonDatas, setPokemonDatas] = useState({})

  const getPokemonDatasUrl = `https://pokeapi.co/api/v2/pokemon/`

  const getPokemonDatas = async (pokemon) => {

    let resp = await fetch(getPokemonDatasUrl+pokemon)
    let data = await resp.json()
 
    console.log(data)
    console.log(data.types.map(index => index.type.name))
    setPokemonDatas(data)    

  }

  useEffect(() => {

    getPokemonDatas(pokemon)

  }, [])

  return (
    <div className='pokemon'> 
    
      <div className='pokemon-header'> 

        <div className='pokemon-header-title-area'>

          <div className='pokemon-header-title'> <h3 className='pokemon-header-title-name'> Name: </h3> <h3 className='pokemon-header-title-pokemon'> {pokemonDatas?.name} </h3> </div>
          <h3 className='pokemon-header-title'> Id: {pokemonDatas?.id} </h3>

        </div>

        <div className='pokemon-header-type'>

          <h3 className='pokemon-header-type-title'> Type(s): </h3>

          <div className='pokemon-header-type-area'>          
               
            {pokemonDatas.types != undefined && pokemonDatas.types.map(index => <p className='pokemon-header-type-p' key={Math.random()}> {index.type.name} </p>)}
          
          </div>  

        </div>

      </div>

      <div className='pokemon-main'>

        <div className='pokemon-main-img-area'>

          {pokemonDatas.sprites != undefined && <img className='pokemon-main-img' src={pokemonDatas.sprites.front_default} />}
          {pokemonDatas.sprites != undefined && <img className='pokemon-main-img' src={pokemonDatas.sprites.back_default} />}

        </div>

        <div className='pokemon-main-stats-area'>

          <div className='pokemon-main-stats-column'>

              {pokemonDatas.stats != undefined && pokemonDatas.stats.map(index => <p className='first-letter'> {index.stat.name}: </p>)}

          </div>

          <div className='pokemon-main-stats-column'>

              {pokemonDatas.stats != undefined && pokemonDatas.stats.map(index => <p> {index.base_stat} </p>)}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Pokemon