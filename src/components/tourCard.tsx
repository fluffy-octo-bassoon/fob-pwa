import { Box, Card, CardContent, CardMedia, Link, Rating, Stack, Typography } from "@mui/material";
import type { Tables } from "../types/database.types";

const TourCard = ({ cover_url, price, provider, rating, name }: Tables<"trips">) => {
	return (
		<Card sx={{ width: "90vw", display: "flex", height: "21vh" }}>
			<Stack spacing={1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%", padding: "10px" }}>
				<CardMedia
					component={"img"}
					sx={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }}
					image={String(cover_url)}
					alt={String(cover_url)}
				/>
				<Rating value={rating} precision={0.5} readOnly size="small" />
			</Stack>
			<Box overflow={"hidden"} textOverflow={"ellipsis"} sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
				<CardContent sx={{ paddingLeft: 0 }}>
					<Typography
						variant="body1"
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
						}}
					>
						{name}
					</Typography>
					<Typography variant="subtitle2" noWrap>
						Provided by:
						<Link>{provider} Test</Link>
					</Typography>
					<Typography variant="h6" textAlign={"center"} paddingTop={2} color={"primary.main"}>
						${price} per person
					</Typography>
				</CardContent>
			</Box>
		</Card>
	);
};

export default TourCard;
