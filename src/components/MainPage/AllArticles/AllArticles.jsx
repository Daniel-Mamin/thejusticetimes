import React from "react";

import { Link } from "react-router-dom";

import Article from "./Article/Article";

const AllArticles = ({ articles }) => {
  return (
    <ul className="main__popular-list">
      {articles &&
        articles.map((article) => (
          <Link key={article.id} to={`/article/${article.id}`}>
            <Article {...article} />
          </Link>
        ))}
    </ul>
  );

  // return (
  // 	<ul className="main__popular-list">
  // 		{articles &&
  // 		articles.map(({id, date, author, avatar, tag, title, description, count, image}) =>
  // 			<li key={id} className="main__popular-list__item">
  // 				<div className="main__popular-list__item-img">
  // 					<img src={image} alt="Image"/>
  // 				</div>
  // 				<div className="main__popular-list__item-content">
  // 					<span className="tag">{tag}</span>
  // 					<h2>{title}</h2>
  // 					<p>{description.substr(0, 205) + '...'}</p>
  // 					<div className="main__popular-list__item-user">
  // 						<img className="user-avatar" src={avatar} alt="user-avatar"/>
  // 						<span className="user-name">{author}</span>
  // 						<div className="user-info">
  // 							<span>{date} · 5 min read</span>
  // 						</div>
  // 						<div className="user-views">
  // 							<img src={views} alt="ViewsLogo"/>
  // 							<span>{count}</span>
  // 						</div>
  // 					</div>
  // 				</div>
  // 			</li>
  // 		)
  // 		}
  // 	</ul>
  // );
};

export default AllArticles;
