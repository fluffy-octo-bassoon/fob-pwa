import { signal } from "@preact/signals";

const trips = signal<Card[]>([
	{
		cover: "https://welovetravel.in/wp-content/uploads/2024/05/Lady-of-our-Church-best-photo-spots-in-Prague-769x1024.jpg",
		price: 15.5,
		provider: "John Travel Inc.",
		rating: 3.5,
		tags: ["Prague", "Dining"],
		title:
			"Prague: 3-Hour Walking Tour Around The CityPrague: 3-Hour Walking Tour Around The CityPrague: 3-Hour Walking Tour Around The CityPrague: 3-Hour Walking Tour Around The CityPrague: 3-Hour Walking Tour Around The City",
	},
	{
		cover: "https://welovetravel.in/wp-content/uploads/2024/05/Lady-of-our-Church-best-photo-spots-in-Prague-769x1024.jpg",
		price: 15.5,
		provider: "John Travel Inc.",
		rating: 3.5,
		tags: ["Prague", "Dining"],
		title: "Prague: 3-Hour Walking Tour Around The City",
	},
]);

type Card = {
	cover: string;
	price: number;
	provider: string;
	rating: number;
	tags?: string[];
	title: string;
};

function useTrips() {
	const Trips = trips.value;

	const addTrip = (newTrip: Card) => {
		trips.value = [...trips.value, newTrip];
	};

	return { Trips, addTrip };
}

export default useTrips;
