import { signal } from "@preact/signals";

const user = signal({
	isAdmin: true,
});

function useAuth() {
	const User = user.value;
	// add rest of the logic
	return { User };
}

export default useAuth();
