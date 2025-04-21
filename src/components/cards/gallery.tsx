import { Accordion, AccordionDetails, AccordionSummary, Backdrop, ImageList, ImageListItem} from "@mui/material"
import React from "preact/compat";

const Gallery = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    
    const gallery = [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/330px-Prague_%286365119737%29.jpg",
		"https://www.grayline.com/wp-content/uploads/2023/12/william-zhang-6En4WYsNYXM-unsplash-scaled.jpg",
        "https://statemag.state.gov/wp-content/uploads/2023/10/1123pom-3-1.jpg",
        "https://cdn.praguecitytourism.city/2024/03/13101933/01-stm-radnice-0288ret-m.jpg",
        "https://media.timeout.com/images/106252671/750/422/image.jpg",
        "https://thirdeyetraveller.com/wp-content/uploads/Prague-Astronomical-Clock-4-1400x1050.jpg"
	]

    return(
            <Accordion>
                <AccordionSummary
                    expandIcon={<span className="material-symbols-outlined">arrow_drop_down</span>}
                >
                        <img loading="lazy" alt="img" src={gallery[0]} />
                </AccordionSummary>
                    <AccordionDetails>
                        <ImageList variant="masonry" cols={2} gap={8}>
                        <Backdrop
                            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                            open={open}
                            onClick={handleClose}
                        >
                            <img src={gallery[0]} />
                        </Backdrop>
                        {gallery.map((image) => (
                            <ImageListItem key={image}>
                                <img
                                    srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${image}?w=248&fit=crop&auto=format`}
                                    alt={"Test"}
                                    loading="lazy"
                                    onClick={handleOpen}
                                />
                            </ImageListItem>
                            ))}
                    </ImageList>
            
                </AccordionDetails>
            </Accordion>
    )
}

export default Gallery;