import React from "react";
import { Link } from "react-router-dom";

import FooterGuest from './FooterGuest';
import FooterUser from './FooterUser';

import './Footer.scss';
import Logo from '../../assets/img/logoWhite.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                    <FooterUser/>
                </div>
                <hr/>
                <div className="footer__copyright">
                    <p>© 2021 Justice-it. All rights reserved.</p>
                    <p>© 2021 Justice-it. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;