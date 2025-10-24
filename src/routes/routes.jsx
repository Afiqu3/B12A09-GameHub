import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import ErrorNotFound from "../Pages/ErrorNotFound/ErrorNotFound";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import GameDetails from "../components/PopularGames/GameDetails";
import About from "../Pages/About/About";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

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
        element: (
          <PrivateRoutes>
            <GameDetails></GameDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: '/forgotPassword',
        Component: ForgotPassword,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "*",
    Component: ErrorNotFound,
  },
]);
