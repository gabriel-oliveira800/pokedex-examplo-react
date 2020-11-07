import React from 'react';

import LogoPokemos from '../../assets/pokeball.svg';

import './style.css';

function Loading() {
    return (
        <div className="wrapper-loading">
            <div className="loading-pokemos">
                <img src={LogoPokemos} alt='pokeball' />
                <h1>Carrengando ...</h1>
            </div>
        </div>
    );
}

export default Loading;