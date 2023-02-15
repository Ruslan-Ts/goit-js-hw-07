import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
return `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</div>`}).join('');

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="auto"/>`,
        {
            onShow: () => document.addEventListener('keydown', onCloseModal),
            onClose: () => document.removeEventListener('keydown', onCloseModal),
        }
    );
    instance.show();

    function onCloseModal(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
}










console.log(galleryItems);
