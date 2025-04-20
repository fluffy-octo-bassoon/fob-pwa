import { CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router, lazy } from "preact-iso";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import theme from "./constants/theme";
import "./index.css";
import HomePage from "./routes/home";

const CartPage = lazy(() => import("./routes/cart"));
const PlaceDetailsPage = lazy(() => import("./routes/home/id"));
const ProfilePage = lazy(() => import("./routes/profile"));

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={HomePage} />
			<Route path="/:id" component={PlaceDetailsPage} />
			{/* <Route path="/:id/edit" component={HomePage} /> */}
			<Route path="/profile" component={ProfilePage} />
			<Route path="/cart" component={CartPage} />
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
