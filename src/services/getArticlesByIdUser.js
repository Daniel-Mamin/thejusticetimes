import allArticles from "../mocks/mocks";

const getArticlesByIdUser = id => allArticles.filter(article => article.author == id);

export default getArticlesByIdUser;