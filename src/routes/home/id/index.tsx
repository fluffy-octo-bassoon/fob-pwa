import { useRoute } from "preact-iso";
import useTrips from "../../../hooks/useTrip";
import Gallery from "../../../components/cards/gallery";
import { Rating, Stack, Typography } from "@mui/material";

function PlaceDetailsPage() {
	const { params } = useRoute();
	const { Trips } = useTrips();

	return (
		<Stack flex={1} alignItems={"center"} spacing={2} padding={2} overflow={"hidden"} textOverflow={"ellipsis"} maxWidth={"90%"} order={1}>
			<Gallery />
			<Typography variant="h4" fontSize={30} noWrap maxWidth={"100%"}>
				{Trips[1].title} + more text to see how it looks
			</Typography>
			<Stack direction={"row"} spacing={1}>
				<Rating value={Trips[1].rating} precision={0.5} readOnly size="large" />
				<Typography variant="h6">{Trips[1].rating}</Typography>
			</Stack>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, expedita ex? Adipisci explicabo optio omnis iusto,
				quis dolor doloribus laboriosam. Quos quas dolorum in a necessitatibus dolores officia facere nam.
				
			</Typography>
		</Stack>
		
	);
}

export default PlaceDetailsPage;
