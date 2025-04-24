import { useLocation } from "preact-iso";
import { UserSignal } from "../../hooks/auth";

function ProfilePage() {
	const { route } = useLocation();

	if (UserSignal.value != null) route("/", true);

	return <h1>Profile</h1>;
}

export default ProfilePage;
