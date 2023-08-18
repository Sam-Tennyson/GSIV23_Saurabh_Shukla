import { STRINGS } from "../shared/Constants";
import { ROUTE_CONSTANTS } from "../shared/Routes";

import LandingPage from "../views/LandingPage";
import MovieDetail from "../views/MovieDetail";

export const  PublicRoute = [
    {
        path: ROUTE_CONSTANTS.DASHBOARD,
        element: <LandingPage />,
        title: STRINGS.LANDING
    },
    {
        path: ROUTE_CONSTANTS.MOVIE_DETAIL,
        element: <MovieDetail />,
        title: STRINGS.MOVIES
    },
]