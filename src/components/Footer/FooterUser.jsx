import React from 'react';
import {NavLink} from "react-router-dom";

const FooterUser = () => {
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
        <div className="footer__user">
            <ul className="footer__user-list">
              {
                userList.map((item, index) =>
                  <NavLink
                    exact
                    key={index}
                    to={item.link}
                    className="footer__user-item"
                  >
                    {item.name}
                  </NavLink>
                )
              }
            </ul>
            <button className="footer__btn">Logout</button>
        </div>
    )
};

export default FooterUser;
