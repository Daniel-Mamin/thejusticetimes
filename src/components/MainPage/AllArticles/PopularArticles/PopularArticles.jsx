import React from "react";
import { Link } from "react-router-dom";

import users from "../../../../mocks/users";
import views from "../../../../assets/img/views.svg";

const PopularArticles = () => {
  const { date, tag, title, description, count, image, id, id_user } =
    JSON.parse(localStorage.getItem("ALL_ARTICLES"))[0];

  const user = users.find((user) => user.id == id_user);

  return (
    <Link to={`/article/${id}`}>
      <div className="main__views">
        <div className="main__views__img">
          <img src={image} alt="Image" />
        </div>
        <div className="main__views__content">
          <span className="tag">{tag}</span>
          <h2>{title}</h2>
          <p>{description.substr(0, 380)}</p>
          <div className="main__views__user-content">
            <img className="user-avatar" src={user.avatar} alt="user-avatar" />
            <span className="user-name">{`${user.f_name} ${user.l_name}`}</span>
            <div className="user-info">
              <span>{date} · 5 min read</span>
            </div>
            <div className="user-views">
              <img src={views} alt="ViewsLogo" />
              <span>{count}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularArticles;
