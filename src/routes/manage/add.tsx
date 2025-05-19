import { Box, Button, TextField } from "@mui/material";

export default function AddPage() {
	return (
		<>
			<TextField placeholder="Title" inputProps={{ maxLength: 150 }} />
			<TextField placeholder="Description" inputProps={{ maxLength: 2000 }} />
			<TextField placeholder="Provider" inputProps={{ maxLength: 50 }} />
			<TextField placeholder="Provider Url" />
			<Box>
				<label style={{ border: "dashed 5px white", cursor: "pointer" }}>
					Drop cover image here
					<input type="file" accept="image/*" multiple style={{ display: "none" }} />
				</label>
			</Box>
			<Button>Add cover</Button>
			<label style={{ border: "dashed 5px white", cursor: "pointer" }}>
				Drop images here
				<input type="file" accept="image/*" multiple style={{ display: "none" }} />
			</label>
			<Button>Add images</Button>
			Preview:
		</>
	);
}
