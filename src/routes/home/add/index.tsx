import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "preact/hooks";
import Gallery from "../../../components/gallery";
import supabase from "../../../constants/supabase";

export default function PlaceAddPage() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [images, setImages] = useState<string[]>([]);

	const handleAddTrip = async () => {
		const { error } = await supabase.from("trips").insert([
			{
				name,
				price: Number(price),
				images_urls: images,
			},
		]);

		if (error) {
			console.error("Insert error:", error);
		} else {
			alert("Trip added successfully!");
		}
	};

	return (
		<Stack spacing={1}>
			<Typography variant="h6" textAlign={"center"}>
				Dodaj Wycieczkę
			</Typography>
			<TextField required label="Nazwa" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
			<TextField label="Opis" variant="outlined" />
			<TextField label="Cena" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
			<TextField label="Punkt Spotkania (Google Maps Link)" variant="outlined" />
			<Stack direction={"row"} spacing={1}>
				<TextField label="Zdjęcia" variant="outlined" value={image} onChange={(e) => setImage(e.target.value)} />
				<Button
					variant="outlined"
					onClick={() => {
						if (image) {
							setImages([...images, image]);
							setImage("");
						}
					}}
				>
					Dodaj
				</Button>
			</Stack>
			<Button variant="contained" onClick={handleAddTrip}>
				Dodaj Wycieczkę
			</Button>
			{images.length > 0 && (
				<Stack>
					<Typography variant="h6" textAlign={"center"}>
						Gallery Preview
					</Typography>
					<Gallery images_url={images} />
				</Stack>
			)}
		</Stack>
	);
}
