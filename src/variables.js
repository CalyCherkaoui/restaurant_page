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
    ImgElem.setAttribute('class','menu_image');

    dishContainer.append(ImgElem, dishTexteArea);

    return dishContainer;
  }
}

const dishList = [];

let dish1 = new Dish(
                        img1breakfast, 
                        'Breakfast for Two!',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit urna.',
                        '16.00');
dishList.push(dish1.dishElem());

// const dish2 = new Dish(
//                         img2green,
//                         'Green Harmony.',
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '08.00'
//                         );
// dishList.push(dish2.dishElem());

// const dish3 = new Dish(
//                         img3cesar,
//                         'Ave Caesar!',
//                         "Give to Caesar what is Caesar's, and to God what is God's.",
//                         '20.00'
//                         );
// dishList.push(dish3.dishElem());

// const dish4 = new Dish(
//                         img4naan,
//                         'A Rajasthani Story.',
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '30.00'
//                         );
// dishList.push(dish4.dishElem());

// const dish5 = new Dish(
//                         img5pizza,
//                         "All'italiana!",
//                         'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',
//                         '18.00'
//                         );
// dishList.push(dish5.dishElem());

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