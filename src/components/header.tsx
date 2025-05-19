import { Trans } from "@lingui/react/macro";
import { AppBar, TextField } from "@mui/material";

const Header = () => {
	return (
		<AppBar sx={{ order: 0, color: "secondary.main", padding: ".5em", position: "static" }}>
			<TextField label={<Trans>Search</Trans>} variant="outlined" />
		</AppBar>
	);
};

export default Header;
