import { App as CapacitorApp } from "@capacitor/app";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import { useEffect } from "preact/hooks";
import Header from "./components/header";
import { AdminNavigation, Navigation } from "./components/navigation";
import theme from "./constants/theme";
import { fetchUser, isAdmin, isProvider } from "./hooks/auth";
import { fetchFeaturedTrips } from "./hooks/trips";
import "./index.css";
import CartPage from "./routes/cart";
import HomePage from "./routes/home";
import LoginPage from "./routes/login";
import PlaceAddPage from "./routes/manage/add";
import ProfilePage from "./routes/profile";
import ProtectedRoute from "./routes/protectedRoute";
import PlaceDetailsPage from "./routes/tripDetails";

// const PlaceAddPage = lazy(() => import("./routes/home/add"));

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={HomePage} />
			<Route path="/trips/:id" component={PlaceDetailsPage} />
			<Route path="/manage/*" component={AdminRoutes} />
			<Route path="/profile" component={ProtectedRoute} TargetComponent={ProfilePage} />
			<Route path="/cart" component={ProtectedRoute} TargetComponent={CartPage} />
			<Route path="/login" component={LoginPage} />
		</Router>
	</ErrorBoundary>
);

const AdminRoutes = () => (
	<>
		<AdminNavigation />
		<Router>
			<Route
				path="/add"
				component={ProtectedRoute}
				TargetComponent={PlaceAddPage}
				requirement={isAdmin.value || isProvider.value}
			/>
			<Route
				path="trips/manage/edit/:id"
				component={ProtectedRoute}
				requirement={isAdmin.value || isProvider.value}
				TargetComponent={PlaceAddPage}
			/>
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
		CapacitorApp.addListener("backButton", () => {
			if (window.history.length > 1) window.history.back();
			else CapacitorApp.exitApp();
		});

		fetchUser();
		fetchFeaturedTrips();
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LocationProvider>
					<Layout />
				</LocationProvider>
			</ThemeProvider>
		</>
	);
};

// biome-ignore lint/style/noNonNullAssertion: Supposed to be like that
render(<App />, document.getElementById("app")!);
