import { Accordion, AccordionDetails, AccordionSummary, Backdrop, ImageList, ImageListItem } from "@mui/material";
import { useState } from "preact/compat";

interface GalleryProps {
	images_url: string[];
}

const Gallery = ({ images_url }: GalleryProps) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<Accordion>
			<AccordionSummary expandIcon={<span className="material-symbols-outlined">arrow_drop_down</span>}>
				<img loading="lazy" alt="img" src={images_url[0]} />
			</AccordionSummary>
			<AccordionDetails>
				<ImageList variant="masonry" cols={2} gap={8}>
					<Backdrop sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })} open={open} onClick={handleClose}>
						<img src={images_url[0]} alt="cover" />
					</Backdrop>
					{images_url.slice(1).map((image) => {
						return (
							<ImageListItem key={image}>
								<img
									srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
									src={`${image}?w=248&fit=crop&auto=format`}
									alt="gallery item"
									loading="lazy"
									onClick={handleOpen}
								/>
							</ImageListItem>
						);
					})}
				</ImageList>
			</AccordionDetails>
		</Accordion>
	);
};

export default Gallery;
