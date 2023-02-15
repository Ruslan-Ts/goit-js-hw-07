import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onGalleryClick)

const markup = galleryItems.map(({ preview, original, description }) => {
return `<li><a class="gallery__item" href="large-image.jpg">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a></li>`}).join('');

gallery.innerHTML = markup;



function onGalleryClick(evt) {
    evt.preventDefault();
    const lightbox = new SimpleLightbox('.gallery__item', {
        captionData: 'alt',
        captionDelay: 250,
    });

}

console.log(galleryItems);
