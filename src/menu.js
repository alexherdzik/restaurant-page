import {createParagraph} from './utilities';

const createMenu = () => {
    const menu = document.createElement('div');
    menu.appendChild(createParagraph('Menu Content'));

    return menu;
}

const loadMenu = () => {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createMenu());
}

export default loadMenu;