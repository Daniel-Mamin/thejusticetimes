import React, {useState, useEffect} from "react";

import PopularArticles from "./PopularArticles";
import AllArticles from "./AllArticles";
import Pagination from "./Pagination";

import getSortedArray from "../../services/getSortedArray";

import './MainPage.scss';

const MainPage = () => {
	const [articles, setArticles] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const articlesPerPage = 6;

	useEffect(() => {
		//    Будет запрос на статьи
		setArticles(getSortedArray());
	}, [])

	const lastArticleIndex = currentPage * articlesPerPage;
	const firstArticleIndex = lastArticleIndex - articlesPerPage;
	const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

	const nextPage = () => setCurrentPage(prev => prev + 1);
	const prevPage = () => setCurrentPage(prev => prev - 1);

	return (
		<main className="main">
			<div className="container">
				<div className="main__wrapper">
					<PopularArticles/>
					<div className="main__popular">
						<h1 className="main__popular-title">Popular articles</h1>
						<div className="main__popular-content">
							<AllArticles articles={currentArticles}/>
							<Pagination
								disabledPrev={currentPage}
								disabledNext={lastArticleIndex >= articles.length}
								nextPage={nextPage}
								prevPage={prevPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainPage;