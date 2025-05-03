import { Button } from "@mui/material";
import { signOut } from "../hooks/auth";

function ProfilePage() {
	return <Button onClick={signOut}>chuj</Button>;
}

export default ProfilePage;
