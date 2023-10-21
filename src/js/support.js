import charities from './charities';

function createList() {

    const ol = document.createElement('ol');

    charities.forEach((charitie, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${charitie.title}`;
        ol.appendChild(li);
    });


    document.getElementById('support__list').appendChild(ol);
}

createList();
