import { Card, CardContent, Chip, Rating, Stack, Typography } from "@mui/material";
import type { Tables } from "../../types/database.types";

const TourCard = ({ price, provider, rating, tags, name }: Tables<"trips">) => {
    return (
        <Card sx={{ width: "100%" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Rating value={rating} precision={0.5} readOnly />
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1">
                        Provided by: <a href="/">{provider}</a>
                    </Typography>
                    {tags && (
                        <Stack direction="row" justifyContent={"center"} spacing={1} paddingTop={1} paddingBottom={1} flexWrap={"wrap"}>
                            {tags.map((tag) => (
                                <Chip key={tag} label={tag} color="primary" variant="outlined" />
                            ))}
                        </Stack>
                    )}
                    <Typography variant="h4" sx={{ alignSelf: "center" }}>
                        ${price} per person
                    </Typography>
            </CardContent>
        </Card>
    );
};

export default TourCard;