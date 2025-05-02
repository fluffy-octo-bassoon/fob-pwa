import { useLocation } from "preact-iso";
import { user } from "../hooks/auth";

export default function ProtectedRoute({ TargetComponent, redirectPath = "/login", ...routeProps }) {
	const { route } = useLocation();

	if (!user.value) {
		console.error("User not logged in!");
		route(redirectPath);
	}

	return <TargetComponent {...routeProps} />;
}
