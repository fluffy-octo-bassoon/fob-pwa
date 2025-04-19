import "./index.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import { Navigation } from "./components";
import theme from "./constants/theme";
import { CartPage, HomePage, ProfilePage } from "./routes";
import Header from "./components/header/header";

const Routes = () => (
	<ErrorBoundary>
		<Router>
			<Route path="/" component={HomePage} />
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
