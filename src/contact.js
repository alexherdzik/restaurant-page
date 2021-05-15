import {createParagraph} from './utilities';

const createContact = () => {
    const contact = document.createElement('div');
    contact.appendChild(createParagraph('Contact Content'));

    return contact;
}

const loadContact = () => {
    const contact = document.getElementById('content');
    contact.textContent = '';
    contact.appendChild(createContact());
}

export default loadContact