import React from 'react';

const HeaderUser = () => {
    return (
        <div className="header__user">
            <ul className="header__user-list">
                <li className="header__user-item item_active">All articles</li>
                <li className="header__user-item">My acticles</li>
                <li className="header__user-item">Add acticle</li>
                <li className="header__user-item">Profile</li>
            </ul>
            <button className="header__btn">Logout</button>
        </div>
    )
};

export default HeaderUser;
