import './App.css'
import Navbar from './layout/Navbar'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Home from './pages/Home'
import Types from './pages/Types'

function App(){

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

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home typesNames={typesNames}/>}/>
        {typesNames.length > 0 && typesNames.map(type => (<Route key={Math.random()} path={`type/${type}`} element={<Types type={type} />}></Route>))}

      </Routes>
      
    </Router>

  );

}

export default App;
