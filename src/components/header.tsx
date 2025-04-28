import { AppBar, TextField } from "@mui/material";

const Header = () => {
	return (
		<AppBar sx={{ order: 0, color: "secondary.main", padding: ".5em", position: "static" }}>
			<TextField
				label="Wyszukaj"
				variant="outlined"
			/>
		</AppBar>
	); 
};

export default Header;
