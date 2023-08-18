// libs
import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

// components
import AppLayout from "../components/core/layout/AppLayout";
import PublicLayout from "../components/core/layout/PublicLayout";

// constants
import { ROUTE_CONSTANTS } from "../shared/Routes";
import { PublicRoute } from "./PublicRoutes";

const DEFAULT_GUEST_ROUTE = ROUTE_CONSTANTS.DASHBOARD;

const GuestRoutes = () => {
	const routes = PublicRoute;
	let defaultGuestRoute = {
		path: "*",
		element: <Navigate to={DEFAULT_GUEST_ROUTE} replace />,
		title: "Home",
	};
	routes.push(defaultGuestRoute);
	const routing = useRoutes(routes);
	return <PublicLayout>{routing}</PublicLayout>;
};

const RootRouter = () => {
	return (
		<BrowserRouter >
			<AppLayout>
				{<GuestRoutes />}
			</AppLayout>
		</BrowserRouter>
	);
};

export default RootRouter;

