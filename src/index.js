import loadHome from './home'
import loadMenu from './menu'
import loadContact from './contact'

const addListenerToId = (id, type, callback) => {
    document.getElementById(id).addEventListener(type, callback);
}

addListenerToId('home-btn', 'click', loadHome);
addListenerToId('menu-btn', 'click', loadMenu);
addListenerToId('contact-btn', 'click', loadContact);

loadHome();