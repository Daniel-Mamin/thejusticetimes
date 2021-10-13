import React from 'react';

import  HeaderGuest from './HeaderGuest';
import  HeaderUser from './HeaderUser';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__title">
                        <h1>The Justice Times</h1>
                    </div>
                    <HeaderUser/>
                </div>
            </div>
            <hr />
        </header>
    )
}

export default Header;
