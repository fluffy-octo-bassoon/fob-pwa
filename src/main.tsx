import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import { Navigation } from "./components";
import { CartPage, PlacesPage, ProfilePage } from "./routes";

import "./index.css";

const navElements = [
	{ displayName: "Places", link: "/", icon: "explore" },
	{ displayName: "Profile", link: "/profile", icon: "person" },
	{ displayName: "Cart", link: "/cart", icon: "shopping_cart" },
];

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
		<LocationProvider>
			<main className="content">
				<Routes />
			</main>
			<Navigation navElements={navElements} />
		</LocationProvider>
	</>
);

// biome-ignore lint/style/noNonNullAssertion: Supposed to be like that
render(<App />, document.getElementById("app")!);
