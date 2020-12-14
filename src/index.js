import './style.css';
import * as assets from './variables';
import * as navigation from './navigation';

const mydiv = document.querySelector('#content');
mydiv.append(navigation.brand, navigation.navList);
