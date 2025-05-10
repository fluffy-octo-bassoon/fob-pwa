import { Rating, Stack, Typography } from "@mui/material";
import { useRoute } from "preact-iso";
import Gallery from "../components/gallery";
import { trips } from "../hooks/trips";

export default function PlaceDetailsPage() {
	const { params } = useRoute();
	const trip = trips.value.find((t) => t.$id === String(params.id));

	if (trip) {
		const images_url: string[] = [trip.coverUrl, ...(trip.imagesUrl ?? [])].filter((url) => url !== null);

		return (
			<Stack flex={1} alignItems={"center"} spacing={2}>
				<Gallery images_url={images_url} />
				<Typography variant="h5" maxWidth={"100%"}>
					{trip.name}
				</Typography>
				<Stack direction={"row"} spacing={1}>
					<Rating value={trip.rating} precision={0.5} readOnly size="large" />
					<Typography variant="h6">{trip.rating}</Typography>
				</Stack>
				<Typography variant="body1">{trip.description}</Typography>
			</Stack>
		);
	}
}
