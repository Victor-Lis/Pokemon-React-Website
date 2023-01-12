import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import styles from './Home-module.css'

const Home = () => {
    
    const [loading, setLoading] = useState([])
    const typeUrl = `https://pokeapi.co/api/v2/type/`
    const [typesNames, setTypesNames] = useState([])

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

  return (
    <div className='main'>

        {typesNames.length > 0 && (typesNames.map((type) => (<Link className={`main-type ${type.toLowerCase()}`} to={`type/${type}`} key={Math.random()}>{type}</Link>)))}

    </div>
  )
}

export default Home