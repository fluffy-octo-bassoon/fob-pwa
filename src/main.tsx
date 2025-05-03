import { App as CapacitorApp } from "@capacitor/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import { useEffect } from "preact/hooks";
import Header from "./components/header";
import Navigation from "./components/navigation";
import theme from "./constants/theme";
import "./index.css";
import CartPage from "./routes/cart";
import HomePage from "./routes/home";
import LoginPage from "./routes/login";
import ProfilePage from "./routes/profile";
import ProtectedRoute from "./routes/protectedRoute";
import PlaceDetailsPage from "./routes/tripDetails";

// const PlaceAddPage = lazy(() => import("./routes/home/add"));

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={HomePage} />
			{/* <Route path="/trips/add" component={PlaceAddPage} /> */}
			<Route path="/trips/:id" component={PlaceDetailsPage} />
			<Route path="/profile" component={ProtectedRoute} TargetComponent={ProfilePage} />
			<Route path="/cart" component={ProtectedRoute} TargetComponent={CartPage} />
			<Route path="/login" component={LoginPage} />
		</Router>
	</ErrorBoundary>
);

const Layout = () => (
	<>
		<Header />
		<main className="content">
			<Routes />
		</main>
		<Navigation />
	</>
);

const App = () => {
	useEffect(() => {
		CapacitorApp.addListener("backButton", () => {
			if (window.history.length > 1) window.history.back();
			else CapacitorApp.exitApp();
		});
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
