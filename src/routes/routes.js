import { MainPage, MyArticles, Article, NoMatch } from "../components";

const routes = [
	{
		path: '/',
		component: MainPage,
		exact: true,
	},
	{
		path: '/myArticles',
		component: MyArticles,
		exact: true,
	},
	{
		path: '/article/:id',
		component: Article,
		exact: true,
	},
	{
		path: '/*',
		component: NoMatch,
	},
];

export default routes;