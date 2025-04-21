import { CircularProgress, Rating, Stack, Typography } from "@mui/material";
import { useRoute } from "preact-iso";
import useSWR from "swr";
import Gallery from "../../../components/gallery/gallery";
import supabase from "../../../constants/supabase";
import type { Tables } from "../../../types/database.types";

const fetcher = async (url: string): Promise<Tables<"trips">> => {
	const { data, error } = await supabase.from(url).select("*").single();
	if (error) throw new Error(error.message);
	return data as Tables<"trips">;
};

function PlaceDetailsPage() {
	const { params } = useRoute();

	const { data, error } = useSWR<Tables<"trips">>(`trips?id=eq.${params.id}`, fetcher);

	if (!data) return <CircularProgress size={75} />;
	if (error) return <h1>{error}</h1>;

	const images_url = [data.cover_url, ...data.images_url];

	return (
		<Stack flex={1} alignItems={"center"} spacing={2} padding={2} overflow={"hidden"} textOverflow={"ellipsis"} maxWidth={"90%"}>
			<Gallery images_url={images_url} />
			<Typography variant="h4" fontSize={30} noWrap maxWidth={"100%"}>
				{data.name} + more text to see how it looks
			</Typography>
			<Stack direction={"row"} spacing={1}>
				<Rating value={data.rating} precision={0.5} readOnly size="large" />
				<Typography variant="h6">{data.rating}</Typography>
			</Stack>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, expedita ex? Adipisci explicabo optio omnis iusto, quis dolor
				doloribus laboriosam. Quos quas dolorum in a necessitatibus dolores officia facere nam.
			</Typography>
		</Stack>
	);
}

export default PlaceDetailsPage;
