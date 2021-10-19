import React from "react";

import views from "../../assets/img/views.svg";

const Article = ({
  image,
  tag,
  title,
  description,
  avatar,
  f_name,
  l_name,
  date,
  count,
}) => {
  return (
    <li className="my-articles__item">
      <div className="my-articles__item-img">
        <img src={image} alt="Image" />
      </div>
      <div className="my-articles__item-tag">
        <span className="tag">{tag}</span>
      </div>
      <h2 className="my-articles__item-title">{title}</h2>
      <p className="my-articles__item-description">{description}</p>
      <div className="main__popular-list__item-user">
        <img className="user-avatar" src={avatar} alt="user-avatar" />
        <span className="user-name">{`${f_name} ${l_name}`}</span>
        <div className="user-info">
          <span>{date} · 5 min read</span>
        </div>
        <div className="user-views">
          <img src={views} alt="ViewsLogo" />
          <span>{count}</span>
        </div>
      </div>
    </li>
  );
};

export default Article;
