import React from "react";
import { Link, useParams } from "react-router-dom";

import getArticleByID from "../../services/getArticleByID";
import "./Article.scss"
import views from "../../assets/img/views.svg";

const Article = () => {
	const { id } = useParams();

	const {date, author, avatar, tag, title, description, count, category, image} = getArticleByID(id)[0];

	return (
		<article className="article">
			<div className="container">
				<div className="article__wrapper">
						<Link to="/">
							<div className="article__btn">
								<button>All articles</button>
							</div>
						</Link>
					<div className="article-content">
						<div className="article-content__tag">
							<span className="tag">{tag}</span>
						</div>
						<div className="article-content__title">
							<h1>{title}</h1>
						</div>
						<div className="article-content__img">
							<img src={image} alt="Image"/>
						</div>
						<div className="article-content__description">
							<p>{description}</p>
						</div>
						<div className="article-content__info">
							<div className="article-content__info-user">
								<img className="user-avatar" src={avatar} alt="user-avatar"/>
								<span className="user-name">{author}</span>
								<div className="user-info">
									<span>{date} · 5 min read</span>
								</div>
								<div className="user-views">
									<img src={views} alt="ViewsLogo"/>
									<span>{count}</span>
								</div>
							</div>
							<div className="article-content__info-category">{category}</div>
						</div>
					</div>
				</div>
			</div>

		</article>
	)
};

export default Article;