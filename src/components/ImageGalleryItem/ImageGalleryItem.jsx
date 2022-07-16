import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({webformatURL, alt, onImgOpen}) {
    return (
        <li className={css.ImageGalleryItem} onOpen={onImgOpen}>
            <img className={css.ImageGalleryItemImage} src={webformatURL} alt={alt} />
        </li>
    );
}