import { Button, TextField } from "@mui/material";
import { useState } from "preact/hooks";
import { signInWithEmailAndPassword } from "../hooks/auth";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signInWithEmailAndPassword(email, password);
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ display: "flex", gap: 10, justifyContent: "center", flexDirection: "column" }}
		>
			<TextField
				required
				label="E-Mail"
				variant="outlined"
				value={email}
				onChange={(e) => setEmail(e.target?.value)}
			/>
			<TextField
				required
				label="Password"
				variant="outlined"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target?.value)}
			/>
			<Button type="submit" variant="contained">
				Log In
			</Button>
			<Button variant="text">Register</Button>
		</form>
	);
}
