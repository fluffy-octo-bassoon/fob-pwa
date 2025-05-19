import { Trans } from "@lingui/react/macro";
import { Button } from "@mui/material";
import { signOut } from "../hooks/auth";

function ProfilePage() {
	return (
		<Button onClick={signOut}>
			<Trans>Logout</Trans>
		</Button>
	);
}

export default ProfilePage;
