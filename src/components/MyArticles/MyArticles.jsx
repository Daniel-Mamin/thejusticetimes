import React from "react";

import Article from "./Article";

import getArticlesByIdUser from "../../services/getArticlesByIdUser";
import "./MyArticles.scss";

const MyArticles = () => {
  const articles = getArticlesByIdUser("Ella Alderson");
  const { avatar, author } = articles[0];

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
                <p>{author}</p>
                <p>
                  Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                  diam. Sed arcu.
                </p>
              </div>
            </div>
          </div>
          <div className="my-articles-content">
            {articles.length != 0 ? (
              <ul className="my-articles__list">
                {articles.map((article) => (
                  <Article key={article.id} {...article} />
                ))}
              </ul>
            ) : (
              <div className="my-articles-content_no">
                <h1>У Вас пока что ничего нет...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticles;
