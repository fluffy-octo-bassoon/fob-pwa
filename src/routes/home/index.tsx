import { CircularProgress, Stack } from "@mui/material";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import useSWR from "swr";
import TourCard from "../../components/cards/TourCard";
import supabase from "../../constants/supabase";
import type { Tables } from "../../types/database.types";

export const tripsSignal = signal<Tables<"trips">[]>([]);

const fetcher = async (url: string): Promise<Tables<"trips">[]> => {
	const { data, error } = await supabase.from(url).select("*");
	if (error) throw new Error(error.message);
	return data as Tables<"trips">[];
};

export default function HomePage() {
	const trips = tripsSignal.value;

	const { data, error } = useSWR<Tables<"trips">[]>("trips?is_featured=eq.true", fetcher);

	useEffect(() => {
		if (data) {
			const existing = tripsSignal.value;
			const newOnes = data.filter((trip) => !existing.some((t) => t.id === trip.id));
			tripsSignal.value = [...existing, ...newOnes];
		}
	}, [data]);

	if (!data) return <CircularProgress size={75} />;
	if (error) return <h1>{error}</h1>;

	return (
		<Stack flex={1} gap={3} alignItems={"center"} sx={{ maxHeight: "100vh", overflow: 'auto' }}>
			{data ? (
				trips.map((card) => (
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