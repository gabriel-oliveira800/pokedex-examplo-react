import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import ApiPoke from './api';

import './style.css';

function App() {

  const dispatch = useDispatch();
  const numberOfPokes = useSelector(state => state.numberOfPokemos);

  useEffect(() => {
    const handlePokemos = async () => {
      var data = await ApiPoke.getPokemons(numberOfPokes);
      dispatch({ type: 'GET_POKEMOS', data });
    }

    handlePokemos();
  });

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;