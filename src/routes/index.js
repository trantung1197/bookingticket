import HomePage from "../containers/Home/HomePage";
import DetailMovie from "../containers/Home/DetailMovie";
import login from "../containers/Admin/Auth/templates/login";

const RoutesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/detailmovie/:id",
    exact: false,
    component: DetailMovie,
  },
  
];

const RoutesAdmin =[
  {
    path: "/login",
    exact: false,
    component: login
  },
]

export { RoutesHome,RoutesAdmin };
