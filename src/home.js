const home = (img) => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'tabcontent');
  homeDiv.setAttribute('id', 'home');

  const heroWrapper = document.createElement('div');
  heroWrapper.setAttribute('class', 'heroWrapper');

  const heroTilWrap = document.createElement('div');
  heroTilWrap.setAttribute('class', 'hero_til_wrap');
  heroTilWrap.innerHTML = "<p class='hero_til_text'> Avocado Studio for a Healthy gourmet experience.</P>";
  
  heroWrapper.append(heroTilWrap, img);
  homeDiv.append(heroWrapper);
  return homeDiv;
}

export default home;
