import { Button, Input, Stack } from "@mui/material";
import { useState } from "preact/hooks";
import { tripsSignal } from "..";

type NewTrip = {
	name: string;
	provider: string;
	cover_url: string;
};

function addTrip(trip: NewTrip) {
	tripsSignal.value = [
		...tripsSignal.value,
		{
			...trip,
			id: crypto.randomUUID(),
			active: null,
			city: null,
			created_at: null,
			images_url: null,
			is_featured: null,
			price: 150,
			rating: 0,
			tags: ["test", "test2"],
			updated_at: null,
			user_id: null,
		},
	];
	console.log(tripsSignal.value);
}

export default function PlaceAddPage() {
	const [formData, setFormData] = useState<NewTrip>({
		name: "",
		provider: "",
		cover_url: ""
	});

	const handleChange = (key: keyof NewTrip) => (e: Event) => {
		const target = e.target as HTMLInputElement;
		setFormData((prev) => ({ ...prev, [key]: target.value }));
	};

	return (
		<Stack flex={1} alignItems="center" spacing={2} padding={2} maxWidth="90%">
			<Input placeholder="Name" value={formData.name} onChange={handleChange("name")} />
			<Input placeholder="Provider" value={formData.provider} onChange={handleChange("provider")} />
			<Input placeholder="Cover URL" value={formData.cover_url} onChange={handleChange("cover_url")} />
			<Button onClick={() => addTrip(formData)}>Add Trip</Button>
		</Stack>
	);
}