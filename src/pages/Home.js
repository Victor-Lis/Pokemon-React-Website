import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import styles from './Home-module.css'

const Home = ({typesNames}) => {

  return (
    <div className='main'>

        {typesNames.length > 0 && (typesNames.map((type) => (<Link className={`main-type ${type.toLowerCase()}`} to={`type/${type}`} key={Math.random()}>{type}</Link>)))}

    </div>
  )
}

export default Home