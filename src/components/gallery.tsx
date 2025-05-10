import { Box, IconButton, ImageList, ImageListItem, Modal } from "@mui/material";
import { useState } from "preact/compat";
import { useSwipeable } from "react-swipeable";

const GalleryPreview = ({ images, open, handleClose }) => {
	return (
		<Modal open={open} onClose={handleClose}>
			<ImageList>
				{images.map((img) => (
					<ImageListItem key={img}>
						<img
							srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${img}?w=248&fit=crop&auto=format`}
							alt={img}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Modal>
	);
};

interface GalleryProps {
	images_url: string[];
}

const Gallery = ({ images_url }: GalleryProps) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handlers = useSwipeable({
		onSwipedLeft: () => setCurrentImage((prev) => (prev + 1) % images_url.length),
		onSwipedRight: () => setCurrentImage((prev) => (prev - 1 + images_url.length) % images_url.length),
	});

	return (
		<>
			<div {...handlers} onClick={handleOpen}>
				<GalleryPreview images={images_url} open={open} handleClose={handleClose} />
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
					<IconButton>
						<span className="material-symbols-outlined">arrow_back_ios</span>
					</IconButton>
					<IconButton>
						<span className="material-symbols-outlined">arrow_forward_ios</span>
					</IconButton>
				</Box>
			</div>
		</>
	);
};

export default Gallery;
