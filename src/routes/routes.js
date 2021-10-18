import {
  MainPage,
  MyArticles,
  Article,
  NoMatch,
  LogIn,
  SingIn,
} from "../components";

const routes = [
  {
    path: "/",
    component: MainPage,
    exact: true,
    withAuth: false,
  },
  {
    path: "/myArticles",
    component: MyArticles,
    exact: true,
    withAuth: true,
  },
  {
    path: "/article/:id",
    component: Article,
    exact: true,
    withAuth: true,
  },
  {
    path: "/login",
    component: LogIn,
    exact: true,
    withAuth: false,
  },
  {
    path: "/singin",
    component: SingIn,
    exact: true,
    withAuth: false,
  },
  {
    path: "/*",
    component: NoMatch,
    withAuth: false,
  },
];

export default routes;
