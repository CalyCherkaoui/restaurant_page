import './style.css';
import * as assets from './variables';
import navigation from './navigation';
import home from './home';
import menu from './menu';

const globalContainer = document.querySelector('#content');
globalContainer.append(navigation(), home(assets.heroImage), menu(assets.dishes));

function openTab(e) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  const tabName = e.currentTarget.attributes.getNamedItem('value').value;
  console.log(tabName);
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
};

const tabElms = document.querySelectorAll('.tablinks');
console.log(tabElms);
for(let i = 0; i < tabElms.length; i++) {
  tabElms[i].addEventListener('click', openTab);
}
