import { CircularProgress, Stack } from "@mui/material";
import useSWR from "swr";
import TourCard from "../../components/cards/TourCard";
import supabase from "../../constants/supabase";
import type { Tables } from "../../types/database.types";

const fetcher = async (url: string): Promise<Tables<"trips">[]> => {
	const { data, error } = await supabase.from(url).select("*");
	if (error) throw new Error(error.message);
	return data as Tables<"trips">[];
};

function HomePage() {
	const { data, error } = useSWR<Tables<"trips">[]>("trips?is_featured=eq.true", fetcher);

	if (!data) return <CircularProgress size={75} />;
	if (error) return <h1>{error}</h1>;

	return (
		<Stack flex={1} gap={3} alignItems={"center"}>
			{data ? (
				data.map((card) => (
					<a key={card.name} href={`/trips/${card.id}`} style={{ textDecoration: "none" }}>
						<TourCard {...card} />
					</a>
				))
			) : (
				<h1>No trips available</h1>
			)}
		</Stack>
	);
}

export default HomePage;
