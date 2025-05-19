import type { ComponentType, JSX } from "preact";
import { useLocation } from "preact-iso";
import { useEffect, useState } from "preact/hooks";
import { user } from "../hooks/auth";

interface ProtectedRouteProps {
	TargetComponent: ComponentType<JSX.IntrinsicAttributes>;
	path: string;
	requirement?: boolean;
}

export default function ProtectedRoute({ TargetComponent, path, requirement = true }: ProtectedRouteProps) {
	const { route } = useLocation();
	const [authStatus, setAuthStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");

	useEffect(() => {
		const checkAuth = async () => {
			if (user.value != null && requirement) {
				setAuthStatus("authenticated");
			} else {
				setAuthStatus("unauthenticated");
			}
		};

		checkAuth();
	}, [user.value, requirement]);

	useEffect(() => {
		if (authStatus === "unauthenticated") {
			route(`/login?redirectTo=${path}`);
		}
	}, [authStatus, route, path]);

	if (authStatus === "authenticated") {
		return <TargetComponent />;
	}

	return null;
}
