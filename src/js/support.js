import charities from './charities';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper.min.css';

const list = document.querySelector('.support__list');

const html = charities.map(makeMarkup).join('');

function makeMarkup({ url, title, img }, index) {
  const numbers = (index + 1).toString().padStart(2, '0');

  return `
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${numbers}</span>
        <a class="support__link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${img}" 1x
                src="${img}" type="png" alt="${title}">
        </a>
    </li>`;
}

list.insertAdjacentHTML('beforeend', html);

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    slidesPerView: 6,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-next',
  },
});
