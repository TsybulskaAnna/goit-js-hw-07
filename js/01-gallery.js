import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('div.gallery');
const imagesGallery = galleryItems.map((el) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`
}).join(""); 
gallery.insertAdjacentHTML("afterbegin", imagesGallery);
console.log(gallery);




gallery.addEventListener("click", onGalleryClick ); 

function onGalleryClick (event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `)

  instance.show()
}

