import React, { useState } from 'react';
import { IconContext } from "react-icons";

import { ImSearch } from 'react-icons/im';
import { VscClose  } from 'react-icons/vsc';
import { IoMdOptions } from 'react-icons/io';

import Logo from '../../assets/pokeball.svg';
import './style.css';

function Header() {
    const [hasOpenFilter, setHasOptionsFilter] = useState(false);


    return (
        <header>
            <img src={Logo} alt='Logo' />

            <div className='input-box'>
                <IconContext.Provider value={{ className: "input-box-logo" }}>
                    <ImSearch />
                </IconContext.Provider>

                <input placeholder="Buscar Pokémons"></input>

                <div 
                className='input-filter'
                    onClick={() => setHasOptionsFilter(!hasOpenFilter)}
                >
                    <IconContext.Provider value={{ className: "input-box-icon" }}>
                       {hasOpenFilter ? <VscClose/> : <IoMdOptions />}
                    </IconContext.Provider>
                </div>
            </div>

            <div className={
                hasOpenFilter ? 'filter' : 'filter-closed'
            }>
                <span>Nome</span>
                <span>Abilidade</span>
                <span>Cor</span>
            </div>
        </header>
    );
}

export default Header;