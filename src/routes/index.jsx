import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import About from "../pages/about";
import IndexPage from "../pages/indexpage";

// ----------------------------------------------------------------------

const Catalog = lazy(() => import("../pages/catalog"));
const Home = lazy(() => import("../pages/home"));
const MovieDetails = lazy(() => import("../pages/movie-details"));
const PlayMovie = lazy(() => import("../pages/play-movie"));
const PageNotFound = lazy(() => import("../pages/page-not-found"));

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
          children: [
            { path: ":category", element: <Catalog /> },
            { path: ":category/:id", element: <MovieDetails /> },
            { path: ":category/:id/play", element: <PlayMovie /> },
          ],
        },
      ],
    },
    { path: "/", element: <IndexPage /> },
    { path: "404", element: <PageNotFound /> },

    { path: "*", element: <Navigate to="/404" replace /> },
    { path: "/about", element: <About/> },
  ]);
}
