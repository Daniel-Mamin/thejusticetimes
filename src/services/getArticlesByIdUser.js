import allArticles from "../mocks/articles";

const getArticlesByIdUser = (id) =>
  allArticles.filter((article) => article.author == id);

export default getArticlesByIdUser;
