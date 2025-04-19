import { Stack } from "@mui/material";
import TourCard from "./card";

const Cards = () => {
    const tours = [
        { title: "Prague: 3-Hour Walking Tour Around The City", provider: "John Travel Inc.", tags: ["Prague", "Dining"], price: 15.50, rating: 3.5 },
        { title: "Prague: 3-Hour Walking Tour Around The City", provider: "John Travel Inc.", tags: ["Dining"], price: 15.50, rating: 1 }
    ];

    return(
        <Stack spacing={2} sx={{order: 1}}>
			{tours.map(({ title, provider, tags, rating, price }) => (
				<TourCard key={title} title={title} provider={provider} tags={tags} rating={rating} price={price} />
			))}
        </Stack>
    );
};

export default Cards;