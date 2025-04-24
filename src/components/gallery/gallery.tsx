import { Box, IconButton } from "@mui/material";
import { useState } from "preact/compat";

interface GalleryProps {
	images_url: string[];
}

const Gallery = ({ images_url }: GalleryProps) => {
	const [ currentImage, setCurrentImage ] = useState(0)

	const handleForward = () => {
		setCurrentImage(currentImage + 1)
		if(images_url.length - 2 < currentImage)
			setCurrentImage(0)
	}

	const handleBack = () => {
		setCurrentImage(currentImage - 1)
		if(currentImage < 0)
			setCurrentImage(images_url.length - 2)
	}

	return (
		<Box sx={{
			padding: .5,
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			backgroundImage: `url(${images_url[currentImage]})`,
			backgroundSize: "cover",
			borderRadius: "10px",
			width: "100%",
			height: 200
		}}>
			<IconButton onClick={handleBack}><span className="material-symbols-outlined">arrow_back_ios</span></IconButton>
			<IconButton onClick={handleForward}><span className="material-symbols-outlined">arrow_forward_ios</span></IconButton>
		</Box>
	);
};

export default Gallery;
