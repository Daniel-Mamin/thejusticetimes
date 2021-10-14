import allArticles from '../mocks/mocks';

const getSortedArray = () => allArticles.sort((a, b) => a.count < b.count ? 1 : -1);

export default getSortedArray;