import { Stack } from "@mui/material";
import TourCard from "../components/tourCard";
import { trips } from "../hooks/trips";

export default function HomePage() {
	return (
		<Stack flex={1} gap={3} alignItems="center" sx={{ maxHeight: "100vh", overflow: "auto" }}>
			{trips.value.length > 0 ? (
				trips.value.map((card) => (
					<a key={card.$id} href={`/trips/${card.$id}`} style={{ textDecoration: "none" }}>
						<TourCard {...card} />
					</a>
				))
			) : (
				<h1>No trips available</h1>
			)}
		</Stack>
	);
}
