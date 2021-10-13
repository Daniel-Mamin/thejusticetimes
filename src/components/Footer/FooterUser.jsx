import React from 'react';

const HeaderUser = () => {
    return (
        <div className="footer__user">
            <ul className="footer__user-list">
                <li className="footer__user-item">All articles</li>
                <li className="footer__user-item">My acticles</li>
                <li className="footer__user-item">Add acticle</li>
                <li className="footer__user-item">Profile</li>
            </ul>
            <button className="footer__btn">Logout</button>
        </div>
    )
};

export default HeaderUser;
