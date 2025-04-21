import { Card, CardContent, Chip, Rating, Stack, Typography } from "@mui/material";

interface CardProps {
	cover: string;
	price: number;
	provider: string;
	rating: number;
	tags?: string[];
	title: string;
}

const TourCard = ({ cover, price, provider, rating, tags, title }: CardProps) => {
	return (
		<Card>
			<CardContent sx={{ display: "flex", flexDirection: "row"}}>
				<Stack spacing={0.5} sx={{ display: "flex", alignItems: "center" }}>
					<img loading="lazy" alt="img" src={cover} width={"150px"} height={"150px"} />
					<Rating value={rating} precision={0.5} readOnly />
				</Stack>
				<Stack padding={2} flex={1} overflow={"hidden"} textOverflow={"ellipsis"} maxHeight={"10%"}>
					<Typography variant="h5">
						{title}
					</Typography>
					<Typography variant="subtitle1">
						Provided by: <a href="/">{provider}</a>
					</Typography>
					{tags && (
						<Stack direction="row" spacing={1} paddingTop={2}>
							{tags.map((tag) => (
								<Chip key={tag} label={tag} color="primary" variant="outlined" />
							))}
						</Stack>
					)}
					<Typography variant="h4" sx={{ alignSelf: "center" }}>
						{price} per person
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default TourCard;
