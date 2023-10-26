import { fetchBooksCategoryList } from "./api";

const bookCategories = document.querySelector('.side-bar__categories')


async function createCategoryList () {
    const categories = await fetchBooksCategoryList();
    const categoriesList = categories
    .map(category => `<li tabindex='-1' class="side-bar__categories-item">${category.list_name}</li>`)
    .join('')
    bookCategories.insertAdjacentHTML('beforeend', categoriesList);

}
 
createCategoryList()
