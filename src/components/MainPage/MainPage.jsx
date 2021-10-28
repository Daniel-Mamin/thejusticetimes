import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import PopularArticles from "./AllArticles/PopularArticles/PopularArticles";
import AllArticles from "./AllArticles/AllArticles";
import Pagination from "./Pagination/Pagination";

import "./MainPage.scss";

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const fetchArticles = useCallback(async () => {
    try {
      const response = await axios.get("/api/article/");
      setArticles(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      {articles.length !== 0 ? (
        <main className="main">
          <div className="container">
            <div className="main__wrapper">
              <PopularArticles articles={articles} />
              {/*<div className="main__popular">*/}
              {/*  <h1 className="main__popular-title">Popular articles</h1>*/}
              {/*  <div className="main__popular-content">*/}
              {/*    <AllArticles articles={currentArticles} />*/}
              {/*    <Pagination*/}
              {/*      disabledPrev={currentPage}*/}
              {/*      disabledNext={lastArticleIndex >= articles.length}*/}
              {/*      nextPage={nextPage}*/}
              {/*      prevPage={prevPage}*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </main>
      ) : (
        <div className="main__no-articles">
          <div className="container">
            <h1>No articles...</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
