import type { ComponentType, JSX } from "preact";
import { useLocation } from "preact-iso";
import { useEffect } from "preact/hooks";
import { fetchUser, user } from "../hooks/auth";

interface ProtectedRouteProps {
	TargetComponent: ComponentType<JSX.IntrinsicAttributes>;
	redirectPath?: string;
}

export default function ProtectedRoute({ TargetComponent, redirectPath = "/login" }: ProtectedRouteProps) {
	const { route } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Not a dependency
	useEffect(() => {
		const checkUser = async () => {
			const user = await fetchUser();
			if (!user) {
				route(redirectPath);
			}
		};

		checkUser();
	}, []);

	if (!user.value) return null;

	return <TargetComponent />;
}
