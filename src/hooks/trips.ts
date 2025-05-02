import { effect, signal } from "@preact/signals";
import { databases } from "../constants/appwrite";

const trips = signal([]);

effect(() => {
	console.log(trips.value);
});

const fetchFeaturedTrips = async () => {
	const promise = await databases.listDocuments("68138dcc00336f800504", "6815069d0006ecb58569");

	trips.value = promise.documents;
};

fetchFeaturedTrips();

export { trips };
