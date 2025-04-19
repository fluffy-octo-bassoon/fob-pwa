import { Box, Card, CardContent, Rating, Stack, Typography } from "@mui/material";

interface CardProps {
	title: string;
	provider: string;
    tags: string[];
	rating: number;
	price: number | string;
}

const TourCard = ({title, provider, tags, rating, price}: CardProps) => {
    return(
        <>
            <Card sx={{maxWidth: '500'}}>
                <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                    <Stack spacing={.5} sx={{display: 'flex', alignItems: 'center'}}>
                        <img src="https://welovetravel.in/wp-content/uploads/2024/05/Lady-of-our-Church-best-photo-spots-in-Prague-769x1024.jpg" width={'150px'} height={'150px'}/>
                        <Rating name="read-only" value={rating} precision={0.5} readOnly />
                    </Stack>
                    <Stack padding={2}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="subtitle1">Provided by: <a href="">{provider}</a></Typography>
                        <Stack direction="row" spacing={1} paddingTop={2}>
                            {tags.map((tag) =>
                                <Box sx={{
                                    border: '1px solid', borderColor: 'primary.main', borderRadius: '5px',
                                    padding: '2px'
                                }}>
                                    {tag}
                                </Box>
                            )}
                        </Stack>
                        <Typography variant="h4" sx={{alignSelf: 'center'}}>{price} per person</Typography>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default TourCard;