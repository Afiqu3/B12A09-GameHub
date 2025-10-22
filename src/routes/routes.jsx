import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import GameDetails from "../components/PopularGames/GameDetails";
import ErrorNotFound from "../Pages/ErrorNotFound/ErrorNotFound";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/gameDetails/:id",
        Component: GameDetails,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: '/login',
        Component: Login,
      },
    ],
  },
  {
    path: '*',
    Component: ErrorNotFound,
  }
]);
