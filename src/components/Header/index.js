import React from 'react';
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from 'react-redux';

import { ImSearch } from 'react-icons/im';

import ApiPokes from '../../api';
import Logo from '../../assets/pokeball.svg';

import './style.css';

function Header() {
    const dispatch = useDispatch();
    const allPokes = useSelector(state => state.data);
    const numberOfPokes = useSelector(state => state.numberOfPokemos);

    function onChangeText(event) {
        dispatch({ type: 'CHANGE_SEARCH', searchText: event.target.value });
    }

    async function toggleNumberOfPokemos() {
        const newNumberOfPokes = numberOfPokes + 21;
        if (newNumberOfPokes <= 893) {
            dispatch({ type: 'TOGGLE_NUMBER_POKES', numberOfPokemos: newNumberOfPokes });
        }

        const data = await ApiPokes.updatedData(allPokes.length + 1, newNumberOfPokes);
        console.log(data);
        dispatch({ type: 'GET_POKEMOS', data: data });
    }

    return (
        <header>

            <img src={Logo} alt='Logo' />

            <div className='input-box'>
                <IconContext.Provider value={{ className: "input-box-logo" }}>
                    <ImSearch />
                </IconContext.Provider>

                <input placeholder="Buscar Pokémons" onChange={onChangeText}></input>

            </div>
            <div className='number-pokes' onClick={toggleNumberOfPokemos}>
                <span>N°{numberOfPokes}</span>
                <p>Pókemos</p>
            </div>
        </header>
    );
}

export default Header;