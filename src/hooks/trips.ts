import { signal } from "@preact/signals";
import { databases } from "../constants/appwrite";

const DB_ID = "68138dcc00336f800504";
const COLLECTION_ID = "68163d5c001d73f8d500";

type Trip = {
	$id: string;
	$createdAt: string;
	$updatedAt: string;
	name: string;
	description?: string;
	meetingPoint?: string;
	tags?: string[];
	accepted?: boolean;
	visible?: boolean;
	featured?: boolean;
	price?: number;
	coverUrl: string;
	imagesUrl?: string[];
	provider: string;
	rating: number;
};

const trips = signal<Trip[]>([]);

const fetchFeaturedTrips = async () => {
	try {
		const { documents } = await databases.listDocuments(DB_ID, COLLECTION_ID);
		trips.value = documents;
	} catch (err) {
		console.error("Failed to fetch trips:", err);
	}
};

// Optional dev-only debug effect
// effect(() => {
// 	console.debug("Trips:", trips.value);
// });

fetchFeaturedTrips();

export { fetchFeaturedTrips, trips };
