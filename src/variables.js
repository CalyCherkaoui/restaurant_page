import img0home from './assets/homehero.jpg';
import img1breakfast from './assets/image1-breakfast.jpg';
import img2green from './assets/image2-greensalad.jpg';
import img3cesar from './assets/image3-saladcesar.jpg';
import img4naan from './assets/image4-naan.jpg';
import img5pizza from './assets/image5-pizza.jpg';
import img6meat from './assets/image6-meat.jpg';
import img7pumkin from './assets/image7-pumkin.jpg';
import img8figues from './assets/image8-figues.jpg';
import img9choco from './assets/image9-chocolat.jpg';
import img10yughurt from './assets/image10-yughurt.jpg';
import iconFacebook from './assets/facebook.png';
import iconTwitter from './assets/twitter.png';
import iconInsta from './assets/instagram.png';
import iconLinkedin from './assets/linkedin.png';


const heroImg = new Image();
heroImg.setAttribute('src', img0home);
heroImg.setAttribute('class','hero_image');
export const heroImage = heroImg;

const breakfastImg = new Image();
breakfastImg.setAttribute('src', img1breakfast);
breakfastImg.setAttribute('class','menu_image');
export const breakfastImage = breakfastImg;

const greenImg = new Image();
greenImg.setAttribute('src', img2green);
greenImg.setAttribute('class','menu_image');
export const greenImage = greenImg;

const ceasarImg = new Image();
ceasarImg.setAttribute('src', img3cesar);
ceasarImg.setAttribute('class','menu_image');
export const ceasarImage = ceasarImg;

const naanImg = new Image();
naanImg.setAttribute('src', img4naan);
naanImg.setAttribute('class','menu_image');
export const naanImage = naanImg;

const pizzaImg = new Image();
pizzaImg.setAttribute('src', img5pizza);
pizzaImg.setAttribute('class','menu_image');
export const pizzaImage = pizzaImg;

const meatImg = new Image();
meatImg.setAttribute('src', img6meat);
meatImg.setAttribute('class','menu_image');
export const meatImage = meatImg;

const pumkinImg = new Image();
pumkinImg.setAttribute('src', img7pumkin);
pumkinImg.setAttribute('class','menu_image');
export const pumkinImage = pumkinImg;

const figuesImg = new Image();
figuesImg.setAttribute('src', img8figues);
figuesImg.setAttribute('class','menu_image');
export const figuesImage = figuesImg;

const chocoImg = new Image();
chocoImg.setAttribute('src', img9choco);
chocoImg.setAttribute('class','menu_image');
export const chocoImage = chocoImg;

const yughurtImg = new Image();
yughurtImg.setAttribute('src', img10yughurt);
yughurtImg.setAttribute('class','menu_image');
export const yughurtImage = yughurtImg;

const socialMedia = [];

const facebook = new Image();
facebook.setAttribute('src', iconFacebook);
facebook.setAttribute('class','social_icon');
socialMedia.push(facebook);

const twitter = new Image();
twitter.setAttribute('src', iconTwitter);
twitter.setAttribute('class','social_icon');
socialMedia.push(twitter);

const instagram = new Image();
instagram.setAttribute('src', iconInsta);
instagram.setAttribute('class','social_icon');
socialMedia.push(instagram);

const linkedin = new Image();
linkedin.setAttribute('src', iconLinkedin);
linkedin.setAttribute('class','social_icon');
socialMedia.push(linkedin);

export const followUs = socialMedia;