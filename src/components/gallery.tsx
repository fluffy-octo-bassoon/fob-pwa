import { Box, IconButton } from "@mui/material";
import { useState } from "preact/compat";

interface GalleryProps {
	images_url: string[];
}

const Gallery = ({ images_url }: GalleryProps) => {
	const [currentImage, setCurrentImage] = useState(0);

	const handleForward = () => {
		setCurrentImage((prev) => (prev + 1) % images_url.length);
	};

	const handleBack = () => {
		setCurrentImage((prev) => (prev - 1 + images_url.length) % images_url.length);
	};

	return (
		<Box
			sx={{
				padding: 0.5,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundImage: `url(${images_url[currentImage]})`,
				backgroundSize: "cover",
				borderRadius: "10px",
				width: "100%",
				height: 200,
			}}
		>
			<IconButton onClick={handleBack}>
				<span className="material-symbols-outlined">arrow_back_ios</span>
			</IconButton>
			<IconButton onClick={handleForward}>
				<span className="material-symbols-outlined">arrow_forward_ios</span>
			</IconButton>
		</Box>
	);
};

export default Gallery;
