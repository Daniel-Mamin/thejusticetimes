import React from "react";
import { NavLink } from "react-router-dom";

const FooterUser = ({ setIdUser }) => {
  const id = localStorage.getItem("ID_USER");
  const userList = [
    {
      name: "All articles",
      link: "/",
    },
    {
      name: "My articles",
      link: "/myArticles",
    },
    {
      name: "Add article",
      link: "/addArticle",
    },
    {
      name: "Profile",
      link: `/profile/${id}`,
    },
  ];

  const onRemoveKeys = () => {
    localStorage.removeItem("ID_USER");
    setIdUser(null);
  };

  return (
    <div className="footer__user">
      <ul className="footer__user-list">
        {userList.map((item, index) => (
          <NavLink
            exact
            key={index}
            to={item.link}
            className="footer__user-item"
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
      <button className="footer__btn" onClick={onRemoveKeys}>
        Logout
      </button>
    </div>
  );
};

export default FooterUser;
