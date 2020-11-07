import React, { useEffect, useState } from 'react';

import ApiPokemons from './api';

import Header from './components/Header';
import Content from './components/Content';
import Loading from './components/Loading'

import './style.css';

function App() {
    const [AllPokemos, setAllPokemos] = useState([]);

    useEffect(() => {
        const handlePokemons = async() => {
            const pokes = await ApiPokemons();
            setAllPokemos(pokes);
        }

        handlePokemons();
    }, []);

    return ( <
        div className = "App" >
        <
        Header / > {
            AllPokemos.length <= 0 ? < Loading / > : < Content pokemos = { AllPokemos }
            />}

            { /* <Footer/> */ } <
            /div>
        );
    }

    export default App;