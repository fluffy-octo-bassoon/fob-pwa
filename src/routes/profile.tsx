import { Button } from "@mui/material";
import { useLocation } from "preact-iso";
import { signOut } from "../hooks/auth";

function ProfilePage() {
	const { route } = useLocation();

	return <Button onClick={signOut}>chuj</Button>;
}

export default ProfilePage;
