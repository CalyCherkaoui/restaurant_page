import './style.css';
import * as assets from './variables';
import * as navigation from './navigation';
import home from './home';

const globalContainer = document.querySelector('#content');

const navWrapper = document.createElement('div');
navWrapper.setAttribute('id', 'nav_wrapper');
navWrapper.append(navigation.brand, navigation.navList);
globalContainer.append(navWrapper, home());
