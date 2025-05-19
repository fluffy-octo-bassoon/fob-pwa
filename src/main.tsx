import { App as CapacitorApp } from "@capacitor/app";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router, lazy } from "preact-iso";
import { useEffect } from "preact/hooks";
import Header from "./components/header";
import { Navigation } from "./components/navigation";
import theme from "./constants/theme";
import { isAdmin, isProvider } from "./hooks/auth";
import { fetchFeaturedTrips } from "./hooks/trips";
import "./index.css";
import { messages } from "./locale/en/messages";
import CartPage from "./routes/cart";
import HomePage from "./routes/home";
import LoginPage from "./routes/login";
import ProfilePage from "./routes/profile";
import ProtectedRoute from "./routes/protectedRoute";
import PlaceDetailsPage from "./routes/tripDetails";

i18n.load("en", messages);
i18n.activate("en");

CapacitorApp.addListener("backButton", () => {
	if (window.history.length > 1) window.history.back();
	else CapacitorApp.exitApp();
});

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={HomePage} />
			<Route path="/trips/:id" component={PlaceDetailsPage} />
			<Route
				path="/manage/*"
				component={ProtectedRoute}
				TargetComponent={AdminRoutes}
				requirement={isAdmin.value || isProvider.value}
			/>
			<Route path="/profile" component={ProtectedRoute} TargetComponent={ProfilePage} />
			<Route path="/cart" component={ProtectedRoute} TargetComponent={CartPage} />
			<Route path="/login" component={LoginPage} />
		</Router>
	</ErrorBoundary>
);

const TripAddPage = lazy(() => import("./routes/manage/add"));
const TripEditPage = lazy(() => import("./routes/manage/add"));

const AdminRoutes = () => (
	<>
		<Router>
			<Route path="/add" component={TripAddPage} />
			<Route path="/edit/:id" component={TripEditPage} />
		</Router>
	</>
);

const Layout = () => (
	<>
		<Header />
		<Container className="content">
			<Routes />
		</Container>
		<Navigation />
	</>
);

const App = () => {
	useEffect(() => {
		fetchFeaturedTrips();
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<I18nProvider i18n={i18n}>
					<LocationProvider>
						<Layout />
					</LocationProvider>
				</I18nProvider>
			</ThemeProvider>
		</>
	);
};

// biome-ignore lint/style/noNonNullAssertion: Supposed to be like that
render(<App />, document.getElementById("app")!);
