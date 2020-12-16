import img0home from './assets/homehero.jpg';
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
heroImg.setAttribute('loading', 'lazy');
export const heroImage = heroImg;

class Dish {
  constructor(image, title, text, price) {
    this.image = image;
    this.title = title;
    this.text = text;
    this.price = price;
  }

  dishElem() {
    const dishContainer = document.createElement('div');
    dishContainer.setAttribute('class', 'dish_container');

    const dishTexteArea = document.createElement('div');
    dishTexteArea.setAttribute('class', 'dish_text_area');

    const dishTitle = document.createElement('h2');
    dishTitle.setAttribute('class', 'dish_title');
    dishTitle.innerHTML = this.title;

    const dishText = document.createElement('p');
    dishText.setAttribute('class', 'dish_text');
    dishText.innerHTML = this.text;

    const dishPrice = document.createElement('p');
    dishPrice.setAttribute('class', 'dish_price');
    dishPrice.innerHTML = `$ ${this.price}`;

    dishTexteArea.append(dishTitle, dishText, dishPrice);

    const ImgElem = new Image();
    ImgElem.setAttribute('src', this.image);
    ImgElem.setAttribute('loading', 'lazy');
    ImgElem.setAttribute('class','menu_image');

    dishContainer.append(ImgElem, dishTexteArea);

    return dishContainer;
  }
}

const dishList = [];

const dish3 = new Dish(
                        img3cesar,
                        'Ave Caesar!',
                        "Give to Caesar what is Caesar's, and to God what is God's. Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.",
                        '20.00'
                        );
dishList.push(dish3.dishElem());

const dish4 = new Dish(
                        img4naan,
                        'A Rajasthani Story.',
                        'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
                        '30.00'
                        );
dishList.push(dish4.dishElem());

const dish5 = new Dish(
                        img5pizza,
                        "All'italiana!",
                        'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
                        '18.00'
                        );
dishList.push(dish5.dishElem());

// const dish6 = new Dish(
//                         img6meat,
//                         'Nice to Meat You!',
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '20.00'
//                         );
// dishList.push(dish6.dishElem());

// const dish7 = new Dish(
//                         img7pumkin,
//                         "Smashing Pumkins.",
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '12.00'
//                         );
// dishList.push(dish7.dishElem());

// const dish8 = new Dish(
//                         img8figues,
//                         'September harvest!',
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '12.00'
//                         );
// dishList.push(dish8.dishElem());

// const dish9 = new Dish(
//                         img9choco,
//                         'Serotonin Booster!',
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '10.00'
//                         );
// dishList.push(dish9.dishElem());

// const dish10 = new Dish(
//                         img10yughurt,
//                         'Hellenic delight!',
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '9.00'
//                         );
// dishList.push(dish10.dishElem());

export const dishes = dishList;

const socialMedia = [];

const facebook = document.createElement('a');
facebook.setAttribute('href', '#');
// facebook.setAttribute('href', 'https://www.facebook.com/houdacherkaouicalypso');
const facebookImg = new Image();
facebookImg.setAttribute('src', iconFacebook);
facebookImg.setAttribute('class','social_icon');
facebook.append(facebookImg);
socialMedia.push(facebook);

const twitter = document.createElement('a');
// twitter.setAttribute('href', 'https://twitter.com/Houda59579688');
twitter.setAttribute('href', '#');
const twitterImg = new Image();
twitterImg.setAttribute('src', iconTwitter);
twitterImg.setAttribute('class','social_icon');
twitter.append(twitterImg);
socialMedia.push(twitter);

const instagram = document.createElement('a');
// instagram.setAttribute('href', '#');
// instagram.setAttribute('href', 'https://www.instagram.com/caly_cher');
const instagramImg = new Image();
instagramImg.setAttribute('src', iconInsta);
instagramImg.setAttribute('class','social_icon');
instagram.append(instagramImg);
socialMedia.push(instagram);

const linkedin = document.createElement('a');
// linkedin.setAttribute('href', 'http://www.linkedin.com/in/houda-cherkaoui-64106395/');
linkedin.setAttribute('href', '#');
const linkedinImg = new Image();
linkedinImg.setAttribute('src', iconLinkedin);
linkedinImg.setAttribute('class','social_icon');
linkedin.append(linkedinImg);
socialMedia.push(linkedin);

export const followUs = socialMedia;