const menu = (list) => {
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'tabcontent');
  menuDiv.setAttribute('id', 'menu');

  for(let i = 0; i < list.length; i++) {
    menuDiv.append(list[i]);
  }
  return menuDiv;
}

export default menu;