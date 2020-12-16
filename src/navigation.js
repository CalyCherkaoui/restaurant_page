const navigation = () => {
  const logo = document.createElement('h1');
  logo.setAttribute('class', 'logo');
  logo.innerHTML = 'The Avocado <span>Studio<span>.';
  const navigationList = document.createElement('div');
  navigationList.setAttribute('class', 'tab');

  const navigationElemHome = document.createElement('button');
  navigationElemHome.setAttribute('class', 'tablinks');
  navigationElemHome.setAttribute('value', 'home');
  navigationElemHome.innerHTML = 'Home';
  // navigationElemHome.addEventListener('click', openTab(e));

  const navigationElemMenu = document.createElement('button');
  navigationElemMenu.setAttribute('class', 'tablinks');
  navigationElemMenu.setAttribute('value', 'menu');
  navigationElemMenu.innerHTML = 'Menu';
  // navigationElemMenu.addEventListener('click', openTab(e));

  const navigationElemContact = document.createElement('button');
  navigationElemContact.setAttribute('class', 'tablinks');
  navigationElemContact.setAttribute('value', 'contact');
  navigationElemContact.innerHTML = 'Contact-us';
  // navigationElemContact.addEventListener('click', openTab(e));

  navigationList.append(navigationElemHome, navigationElemMenu, navigationElemContact);

  const navWrapper = document.createElement('div');
  navWrapper.setAttribute('id', 'nav_wrapper');
  navWrapper.append(logo, navigationList);

  return navWrapper;
};

export default navigation;
