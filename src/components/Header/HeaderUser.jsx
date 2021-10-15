import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderUser = () => {
    const userList = [
      {
        name: "All articles",
        link: "/"
      },
      {
        name: "My articles",
        link: "/myArticles"
      },
      {
        name: "Add articles",
        link: "addArticles"
      },
      {
        name: "Profile",
        link: "/profile"
      }
    ];

    return (
        <div className="header__user">
            <ul className="header__user-list">
              {
                userList.map((item, index) =>
                  <NavLink
                      exact
                      key={index}
                      to={item.link}
                      activeClassName="item_active"
                      className="header__user-item"
                  >
                    {item.name}
                  </NavLink>
                )
              }
            </ul>
            <button className="header__btn">Logout</button>
        </div>
    )
};

export default HeaderUser;
