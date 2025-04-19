import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "preact/hooks";
import Cards from "./components/cards/cards";

function HomePage() {
	let timer: NodeJS.Timeout;
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		timer = setTimeout(() => {
			setIsLoading(false);
		}, 200);

		return () => timer;
	});

	if (isLoading) return <CircularProgress size={75} />;

	return (
		<>
			<Cards />
		</>
	);
}

export default HomePage;
