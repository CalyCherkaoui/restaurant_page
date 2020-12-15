const navbar = document.createElement('nav');

const logo = document.createElement('h1');
logo.setAttribute('class', 'logo');
logo.innerHTML = 'The Avocado Studio';
export const brand = logo;

const navigationList = document.createElement('ul');

const navigationElemMenu = document.createElement('li');
navigationElemMenu.setAttribute('id', 'menu');
navigationElemMenu.setAttribute('class', 'nav_element');
navigationElemMenu.innerHTML = "<button class='btn_tab'>Home</button>";

export const navMenu = navigationElemMenu;

const navigationElemAbout = document.createElement('li');
navigationElemAbout.setAttribute('id', 'about');
navigationElemAbout.setAttribute('class', 'nav_element');
navigationElemAbout.innerHTML = "<button class='btn_tab'>Menu</button>";

export const navAbout = navigationElemAbout;

const navigationElemContact = document.createElement('li');
navigationElemContact.setAttribute('id', 'Contact');
navigationElemContact.setAttribute('class', 'nav_element');
navigationElemContact.innerHTML = "<button class='btn_tab'>Contact-us</button>";

export const navContact = navigationElemContact;

navigationList.append(navigationElemMenu, navigationElemAbout, navigationElemContact);

export const navList = navigationList;

