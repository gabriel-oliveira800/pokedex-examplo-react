import React, { useEffect, useState } from 'react';

import ApiPokemons from './api';

import Header from './components/Header';
import Content from './components/Content';

import './style.css';

function App() {
  const [AllPokemos, setAllPokemos] = useState([]);

  useEffect(() => {
    const handlePokemons = async () => {
      const pokes = await ApiPokemons();
      setAllPokemos(pokes);
    }

    handlePokemons();
  }, []);

  return (
    <div className="App">
      <Header />

      { AllPokemos.length <= 0 ? <h1>Carrengando ...</h1> : <Content pokemos={AllPokemos} />}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
