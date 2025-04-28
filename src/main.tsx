import { CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router, lazy } from "preact-iso";
import Navigation from "./components/navigation";
import theme from "./constants/theme";
import "./index.css";
import CartPage from "./routes/cart";
import HomePage from "./routes/home";
import ProfilePage from "./routes/profile";
import Header from "./components/header";
import LoginPage from "./routes/login";

const PlaceDetailsPage = lazy(() => import("./routes/home/id"));
// const PlaceAddPage = lazy(() => import("./routes/home/add"));

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={HomePage} />
			{/* <Route path="/trips/add" component={PlaceAddPage} /> */}
			<Route path="/trips/:id" component={PlaceDetailsPage} />
			<Route path="/profile" component={ProfilePage} />
			<Route path="/cart" component={CartPage} />
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

const App = () => (
	<>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<LocationProvider>
				<Layout />
			</LocationProvider>
		</ThemeProvider>
	</>
);

// biome-ignore lint/style/noNonNullAssertion: Supposed to be like that
render(<App />, document.getElementById("app")!);
