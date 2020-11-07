import React, { useState, useEffect } from 'react';

import './style.css';

export default function InfoPokemon() {

    function getNumItems(length) {
        let arraItem = [];

        for (let index = 0; index < length; index++) {
            arraItem.push(index);
        }

        return arraItem;
    }

    return (
        <div className="wrapper-info">
            <div className="info-header">
                <span>Height:  {234 / 10}kg</span>
                <span>Weight:  {44.5 / 10}m</span>
            </div>

            <div className="info-stats">
                <span>HP</span>
                <ul>
                    {getNumItems(3).map(_ => <li></li>)}
                </ul>
            </div>

            <div className="info-stats">
                <span>Attack</span>
                <ul>
                    {getNumItems(5).map(_ => <li></li>)}
                </ul>
            </div>

            <div className="info-stats">
                <span>Defense</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className="info-stats">
                <span>Special Attack</span>
                <ul>
                    {getNumItems(15).map(_ => <li></li>)}
                </ul>
            </div>

            <div className="info-stats">
                <span>Special Attack</span>
                <ul>
                    {getNumItems(4).map(_ => <li></li>)}
                </ul>
            </div>

            <div className="info-stats">
                <span>Special Defense</span>
                <ul>
                    {getNumItems(2).map(_ => <li></li>)}
                </ul>
            </div>

            <div className="info-stats">
                <span>Speed</span>
                <ul>
                    {getNumItems(6).map(_ => <li></li>)}
                </ul>
            </div>
        </div>
    );
}