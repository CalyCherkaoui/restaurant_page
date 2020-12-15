const menu = (dishes) => {
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'tabcontent');
  menuDiv.setAttribute('id', 'menu');

  for(let i = 0; i < dishes.length; i++) {
    menuDiv.append(dishes[i]);
  }
  return menuDiv;
}

export default menu;