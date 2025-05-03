import { Rating, Stack, Typography } from "@mui/material";
import { useRoute } from "preact-iso";
import Gallery from "../components/gallery";
import { trips } from "../hooks/trips";

export default function PlaceDetailsPage() {
	const { params } = useRoute();
	const data = trips.value.find((t) => t.$id === String(params.id));
	console.log(data);

	const images_url: string[] = [data.coverUrl, ...(data.imagesUrl ?? [])].filter((url) => url !== null);

	return (
		<Stack flex={1} alignItems={"center"} spacing={2}>
			<Gallery images_url={images_url} />
			<Typography variant="h5" maxWidth={"100%"}>
				{data.name} + more text to see how it looks
			</Typography>
			<Stack direction={"row"} spacing={1}>
				<Rating value={data.rating} precision={0.5} readOnly size="large" />
				<Typography variant="h6">{data.rating}</Typography>
			</Stack>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, expedita ex? Adipisci explicabo optio
				omnis iusto, quis dolor doloribus laboriosam. Quos quas dolorum in a necessitatibus dolores officia
				facere nam.
			</Typography>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, expedita ex? Adipisci explicabo optio
				omnis iusto, quis dolor doloribus laboriosam. Quos quas dolorum in a necessitatibus dolores officia
				facere nam.
			</Typography>
		</Stack>
	);
}
