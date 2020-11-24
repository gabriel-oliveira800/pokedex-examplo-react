import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '../Loading';
import InfoPokemon from '../InfoPokemon';

import './style.css';


function Content() {
    const pokemos = useSelector(state => state.data);

    return (
        <>
            { pokemos.length <= 0 ?
                <Loading /> :
                <main>
                    <div className="wrapper-content">
                        {pokemos.map(item =>
                            <div key={item.id} className="content--box" >
                                <div className="poke-num">#{item.id}</div>
                                <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`}
                                    alt={item.name}
                                />

                                <div className="poke-info">
                                    <h1>{item.name}</h1>

                                    <ul>
                                        {item.types.map(typesItem => {
                                            return <li key={typesItem.slot}>{typesItem.type.name}</li>
                                        })}
                                    </ul>

                                </div>

                                <InfoPokemon
                                    height={item.height}
                                    weight={item.weight}
                                    stats={item.stats}
                                />
                            </div>
                        )}
                    </div>
                </main>
            }
        </>
    );
}

export default Content;