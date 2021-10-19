import React from "react";

import Article from "./Article";

import getArticlesByIdUser from "../../services/getArticlesByIdUser";
import "./MyArticles.scss";

const MyArticles = () => {
  const {
    articles,
    user: { f_name, l_name, avatar, description },
  } = getArticlesByIdUser();

  return (
    <div className="my-articles">
      <div className="container">
        <div
          className={`my-articles__wrapper${
            articles.length == 0 ? " my-articles__wrapper_no" : ""
          }`}
        >
          <div className="my-articles-user">
            <div className="my-articles-user__info">
              <div className="my-articles-user__info-wrapper">
                <img src={avatar} alt="user-avatar" />
                <p>{f_name}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="my-articles-content">
            {articles.length != 0 ? (
              <ul className="my-articles__list">
                {articles.map((article) => (
                  <Article
                    key={article.id}
                    {...article}
                    avatar={avatar}
                    l_name={l_name}
                    f_name={f_name}
                  />
                ))}
              </ul>
            ) : (
              <div className="my-articles-content_no">
                <h1>You have nothing yet...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticles;
