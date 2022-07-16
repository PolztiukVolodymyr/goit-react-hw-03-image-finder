import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, openModal }) {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    alt={tags}
                    onOpen={() => openModal(largeImageURL, tags)}
                /> 
            ))}
  
        </ul>
    );
}
