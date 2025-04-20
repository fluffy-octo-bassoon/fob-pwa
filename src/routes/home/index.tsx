import { Link, Stack } from "@mui/material";
import TourCard from "../../components/cards/TourCard";
import useTrips from "../../hooks/useTrip";

function HomePage() {
	const { Trips } = useTrips();
	// if (isLoading) return <CircularProgress size={75} />;

	return (
		<Stack flex={1} gap={3}>
			{Trips.map((card) => (
				<Link key={card.title} href="/1" sx={{ textDecoration: "none" }}>
					<TourCard {...card} />
				</Link>
			))}
		</Stack>
	);
}

export default HomePage;
