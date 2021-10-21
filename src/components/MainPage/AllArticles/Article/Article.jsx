import React from "react";

import views from "../../../../assets/img/views.svg";

const Article = ({ image, tag, title, description, date, count, id_user }) => {
  const users = JSON.parse(localStorage.getItem("ALL_USERS"));
  const user = users.find((user) => user.id === id_user);

  return (
    <li className="main__popular-list__item">
      <div className="main__popular-list__item-img">
        <img src={image} alt="Image" />
      </div>
      <div className="main__popular-list__item-content">
        <span className="tag">{tag}</span>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description.substr(0, 205) }} />
        <div className="main__popular-list__item-user">
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
    </li>
  );
};

export default Article;
