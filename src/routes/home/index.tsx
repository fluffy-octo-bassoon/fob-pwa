import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "preact/hooks";

function HomePage() {
	let timer: NodeJS.Timeout;
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000);

		return () => timer;
	});

	if (isLoading) return <CircularProgress size={75} />;

	return (
		<>
			<h3>Please start searching...</h3>
		</>
	);
}

export default HomePage;
