import { Card, CardContent, Chip, Rating, Stack, Typography } from "@mui/material";
import type { Tables } from "../../types/database.types";

const TourCard = ({ cover_url, price, provider, rating, tags, name }: Tables<"trips">) => {
	return (
		<Card>
			<CardContent sx={{ display: "flex", flexDirection: "row" }}>
				<Stack spacing={0.5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
					<img loading="lazy" alt="img" src={String(cover_url)} width={"150px"} height={"150px"} />
					<Rating value={rating} precision={0.5} readOnly />
				</Stack>
				<Stack display={"flex"} padding={2} flex={4} textOverflow={"ellipsis"} flexWrap={"nowrap"} maxHeight={"10%"}>
					<Typography variant="h5" textOverflow={"ellipsis"}>
						{name}
					</Typography>
					<Typography variant="subtitle1">
						Provided by: <a href="/">{provider}</a>
					</Typography>
					{tags && (
						<Stack direction="row" spacing={1} paddingTop={2} flexWrap={"wrap"}>
							{tags.map((tag) => (
								<Chip key={tag} label={tag} color="primary" variant="outlined" />
							))}
						</Stack>
					)}
					<Typography variant="h4" sx={{ alignSelf: "center" }}>
						{price}$ per person
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default TourCard;
