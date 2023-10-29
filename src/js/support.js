import charities from './charities';

const list = document.querySelector('.support__list');
const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const html = charities.map(makeMarkup).join('');

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');

  return `
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${digits}</span>
        <a class="support__link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${img}" 1x
                src="${img}" type="image/png" alt="${title}">
        </a>
    </li>`;
}

list.innerHTML = html;

function toggleCharitiesView(offset) {
  list.style.transform = `translateY(${offset}px)`;
  btnNext.classList.toggle('btn-hidden');
  btnBack.classList.toggle('btn-hidden');
}

function nextCharities() {
  toggleCharitiesView(-152);
}

const prevCharities = () => {
  toggleCharitiesView(0);
};

btnNext.addEventListener('click', nextCharities);
btnBack.addEventListener('click', prevCharities);