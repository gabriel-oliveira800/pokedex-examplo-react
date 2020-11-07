import React, { useState } from 'react';
import { IconContext } from 'react-icons';

import { BiDownArrow } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import './style.css';

export default function InfoPokemon({ height, weight, stats }) {
    const [extendStats, setExtendStats] = useState(false);

    function getPorceNumberForce(base) {
        let arraItem = [];
        const porcentForce = parseInt(base / 10);

        for (let index = 0; index < porcentForce; index++) {
            arraItem.push(index);
        }

        return arraItem;
    }

    return (
        <>
            <IconContext.Provider value={{
                className: !extendStats ? "more-icon" : "more-icon-closed",
                attr: { onClick: () => setExtendStats(!extendStats) }
            }}>
                {!extendStats ? <BiDownArrow /> : <AiOutlineClose />}
            </IconContext.Provider>

            <br></br>

            {
                extendStats ?
                    <div className="wrapper-info">
                        <div className="info-header">
                            <span>Height:  {height / 10}kg</span>
                            <span>Weight:  {weight / 10}m</span>
                        </div>

                        {stats.map(statItem => {
                            return <div key={statItem.stat.url} className="info-stats">
                                <span>{statItem.stat.name}</span>
                                <ul>
                                    {getPorceNumberForce(statItem.base_stat).map(qnt => <li key={height * qnt}></li>)
                                    }
                                </ul>
                            </div>
                        })}
                    </div>
                    : null
            }
        </>
    );
}