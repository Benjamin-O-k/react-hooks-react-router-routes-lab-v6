import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import React from "react";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/directors",
        element: <Directors />,
        errorElement: <ErrorPage />
    },
    {
        path: "/actors",
        element: <Actors />,
        errorElement: <ErrorPage />
    },
    {
        path: "/movies/id",
        element: <Movie />,
        errorElement: <ErrorPage />
    }
];

export default routes;
