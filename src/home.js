import {createParagraph} from './utilities';

const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('container');

    home.appendChild(createParagraph('Home Content'));

    return home;
}

const loadHome = () => {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createHome());
}

export default loadHome