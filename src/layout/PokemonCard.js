import React from 'react'

import imageNotFound from '../imgs/Image-not-found.png'

import {Link, Routes, Route} from 'react-router-dom'

import Pokemon from '../pages/Pokemon'

import Home from '../pages/Home'

import './PokemonCard-module.css'

import {useState, useEffect} from 'react'

const PokemonCard = ({name}) => {

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
        
      <h5 className='pokemon-card-name'> {name} </h5>
      <img className='pokemon-card-img' src={pokemonImg || imageNotFound} />

      <Link to={`/${name}`} className="pokemon-footer-title"> Ver mais </Link>

    </div>
  )
}

export default PokemonCard