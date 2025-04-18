import { createTheme } from "@mui/material";

const theme = createTheme({
	cssVariables: true,
	palette: {
		mode: "dark",
		primary: {
			main: "#4dd8c6",
		},
		secondary: {
			main: "#bde697",
		},
	},
	colorSchemes: {
		dark: true,
	},
});

export default theme;
