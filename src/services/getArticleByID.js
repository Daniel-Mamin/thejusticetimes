import allArticles from '../mocks/mocks';

const getArticleByID = id => allArticles.filter(article => article.id == id);


export default getArticleByID;
