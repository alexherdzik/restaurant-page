const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    return paragraph;
}

const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('container');

    home.appendChild(createParagraph('Elegance'));

    return home;
}

const loadHome = () => {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createHome());
}

export default loadHome;