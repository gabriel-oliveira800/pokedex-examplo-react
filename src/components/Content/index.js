import React, { useState } from 'react';
import { IconContext } from 'react-icons';

import { BiDownArrow } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';


import InfoPokemon from '../InfoPokemon'

import './style.css';

export default function Content({ pokemos }) {
    const [extendStats, setExtendStats] = useState(false);

    return (
        <main>
            <div className="wrapper-content">

                {pokemos.map(item =>
                    <div key={item['id']} className="content--box">
                        <div className="poke-num">#{item['id']}</div>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${item['id']}.png`} alt={item['name']} />

                        <div className="poke-info">
                            <h1>{item['name']}</h1>
                            <span>{item['types'][0]}</span>

                        </div>

                        <br></br>
                        <IconContext.Provider value={{
                            className: !extendStats ? "more-icon" : "more-icon-closed",
                            attr: { onClick: () => setExtendStats(!extendStats) }
                        }}>
                            {!extendStats ? <BiDownArrow /> : <AiOutlineClose />}
                        </IconContext.Provider>
                        <br></br>
                        {extendStats ? <InfoPokemon /> : null}

                    </div>
                )}

                {/* {
                    pokemos.map(item => {
                        
                    })
                } */}
            </div>
        </main>
    );
}