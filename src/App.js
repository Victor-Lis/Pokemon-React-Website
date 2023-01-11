import './App.css'

import {useState, useEffect} from 'react'

function App(){

    const apiUrl = `https://pokeapi.co/api/v2/type/`

    const [typesNames] = useState([])
    const [typesNamesCount] = useState([])
    const [datas, setDatas] = useState([])

    const getPokemonsByType = async (url) => {

      const res = await fetch(url);
      const data = await res.json();

      data.results.map((index) => (typesNames.push(index.name)))

      console.log(typesNames)

    };

    useEffect(() => {

      getPokemonsByType(apiUrl)

    }, [])

  return (
    <div>
      {typesNames.length > 0 && (typesNames.map((type) => (<p>{type}</p>)))}
    </div>
  );
}

export default App;
