import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import About from "../pages/about";
import IndexPage from "../pages/indexpage";
import TopMovies from "../pages/topmovies";

// ----------------------------------------------------------------------

const Catalog = lazy(() => import("../pages/catalog"));
const Home = lazy(() => import("../pages/home"));
const MovieDetails = lazy(() => import("../pages/movie-details"));
const PlayMovie = lazy(() => import("../pages/play-movie"));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "catalog",
          children: [],
        },
      ],
    },
    { path: ":category", element: <Catalog /> },
    { path: ":category/:id/:name", element: <MovieDetails /> },
    { path: ":category/:id/play/", element: <PlayMovie /> },
    { path: "top-movies", element: <TopMovies /> },
    { path: "/", element: <IndexPage /> },

    { path: "*", element: <Navigate to="/home" replace /> },
    { path: "/about", element: <About /> },
  ]);
}
