import React from 'react';

import './style.css';


function Footer() {
    return (
        <footer>
            <h2>Feito com <span>💜</span> por Gabriel Oliveira</h2>
            <div className="rede-social">
                <a href="https://github.com/gabriel-oliveira800">
                    <img src="https://marcas-logos.net/wp-content/uploads/2020/03/GITHUB-LOGO.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-oliveira-94ab2a17a">
                    <img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/12/linkedin.png?w=780&h=408&crop=1" alt="Linkedin" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;