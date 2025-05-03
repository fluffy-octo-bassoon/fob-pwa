import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "preact/compat";
import * as React from "react";
import { useSwipeable } from "react-swipeable";

interface GalleryProps {
	images_url: string[];
}

const Gallery = ({ images_url }: GalleryProps) => {
	const [currentImage, setCurrentImage] = useState(0);

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handlers = useSwipeable({
		onSwipedLeft: () => setCurrentImage((prev) => (prev + 1) % images_url.length),
		onSwipedRight: () => setCurrentImage((prev) => (prev - 1 + images_url.length) % images_url.length),
	});

	const handleForward = () => {
		setCurrentImage((prev) => (prev + 1) % images_url.length);
	};

	const handleBack = () => {
		setCurrentImage((prev) => (prev - 1 + images_url.length) % images_url.length);
	};

	return (
		<div {...handlers} style="width: 100%;" onClick={handleOpen}>
			<Modal open={open} onClose={handleClose}>
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
						minHeight: 200,
					}}
				>
					T
				</Box>
			</Modal>
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
					minHeight: 200,
				}}
			>
				<IconButton onClick={handleBack}>
					<span className="material-symbols-outlined">arrow_back_ios</span>
				</IconButton>
				<IconButton onClick={handleForward}>
					<span className="material-symbols-outlined">arrow_forward_ios</span>
				</IconButton>
			</Box>
		</div>
	);
};

export default Gallery;
