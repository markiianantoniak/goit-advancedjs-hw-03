import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const searchQuery = event.target.elements.searchQuery.value.trim();

    if (!searchQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query',
        position: 'topRight',
      });
      return;
    }

    clearGallery(gallery);
    showLoader(loader);

    fetchImages(searchQuery)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.info({
            title: 'Info',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return;
        }

        gallery.innerHTML = renderGallery(data.hits);
        lightbox.refresh();
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message:
            'An error occurred while fetching images. Please try again later.',
          position: 'topRight',
        });
        console.error(error);
      })
      .finally(() => {
        hideLoader(loader);
        event.target.reset();
      });
  });
});
