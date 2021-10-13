import React from 'react';

import  HeaderGuest from './HeaderGuest';
import  HeaderUser from './HeaderUser';

import './Header.scss';
import Logo from '../../assets/img/logoBlack.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__title">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <HeaderGuest/>
                </div>
            </div>
            <hr />
        </header>
    )
};

export default Header;
