import allArticles from "../mocks/articles";

const getArticleByID = (id) =>
  allArticles.filter((article) => article.id == id);

export default getArticleByID;
