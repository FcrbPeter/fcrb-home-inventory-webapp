import {createBrowserRouter, redirect} from "react-router-dom";
import {IndexPage} from "./IndexPage.jsx";
import {LoginPage, LoginPageLoader} from "./LoginPage.jsx";
import {HomePage, HomePageLoader} from "./HomePage.jsx";
import {ErrorPage} from "./ErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    loader: LoginPageLoader,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    loader: HomePageLoader,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    loader: () => redirect('/'),
  }
])
