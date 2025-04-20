import { useRoute } from "preact-iso";

function PlaceDetailsPage() {
	const { params } = useRoute();

	return (
		<>
			<h1>{params.id}</h1>
		</>
	);
}

export default PlaceDetailsPage;
