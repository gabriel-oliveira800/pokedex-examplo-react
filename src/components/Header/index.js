import React from 'react';
import { IconContext } from "react-icons";

import { ImSearch } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/pokeball.svg';

import './style.css';

function Header() {
    const dispatch = useDispatch();
    const numberOfPokes = useSelector(state => state.numberOfPokemos);

    function onChangeText(event) {
        dispatch({ type: 'CHANGE_SEARCH', searchText: event.target.value });
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

            <div className='number-pokes'>
                <span>{numberOfPokes}</span>
                <p>Pókemos</p>
            </div>
        </header>
    );
}

export default Header;