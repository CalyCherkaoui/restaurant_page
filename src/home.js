import * as assets from './variables';

const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'section_conatiner');
  homeDiv.setAttribute('id', 'home');

  const heroWrapper = document.createElement('div');
  heroWrapper.setAttribute('class', 'heroWrapper');

  const heroTilWrap = document.createElement('div');
  heroTilWrap.setAttribute('class', 'hero_til_wrap');
  heroTilWrap.innerHTML = "<p class='hero_til_text'> Avocado Studio for Helthy gourmet experience </P>";
  
  heroWrapper.append(heroTilWrap, assets.heroImage);
  homeDiv.append(heroWrapper);
  return homeDiv;
}

export default home;
