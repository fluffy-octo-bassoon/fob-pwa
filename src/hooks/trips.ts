import { effect, signal } from "@preact/signals";
import type { Models } from "appwrite";
import { databases } from "../constants/appwrite";

const DB_ID = "68138dcc00336f800504";
const COLLECTION_ID = "68163d5c001d73f8d500";

const trips = signal<Models.Document[]>([]);

const fetchFeaturedTrips = async () => {
	const { documents } = await databases.listDocuments(DB_ID, COLLECTION_ID);
	trips.value = documents;
};

effect(() => {
	console.debug("Trips:", trips.value);
});

export { fetchFeaturedTrips, trips };
