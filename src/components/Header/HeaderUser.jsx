import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const HeaderUser = ({ setIdUser }) => {
  const { logout } = useContext(AuthContext);

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

  // const onRemoveKeys = () => {
  //   localStorage.removeItem("ID_USER");
  //   setIdUser(null);
  // };

  return (
    <div className="header__user">
      <ul className="header__user-list">
        {userList.map((item, index) => (
          <NavLink
            exact
            key={index}
            to={item.link}
            activeClassName="item_active"
            className="header__user-item"
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
      <button className="header__btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default HeaderUser;
