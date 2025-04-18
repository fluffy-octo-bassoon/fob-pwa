import "./index.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import { Navigation } from "./components";
import theme from "./constants/theme";
import { CartPage, PlacesPage, ProfilePage } from "./routes";

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={PlacesPage} />
			<Route path="/profile" component={ProfilePage} />
			<Route path="/cart" component={CartPage} />
		</Router>
	</ErrorBoundary>
);

const App = () => (
	<>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<LocationProvider>
				<main className="content">
					<Routes />
				</main>
				<Navigation />
			</LocationProvider>
		</ThemeProvider>
	</>
);

// biome-ignore lint/style/noNonNullAssertion: Supposed to be like that
render(<App />, document.getElementById("app")!);
