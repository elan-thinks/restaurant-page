import homeCake from './Assets/Burger.png';  
import menu from './Assets/menu.png';  
import homeIcon1 from './Assets/bread2.png';  
import homeIcon2 from './Assets/breadlogo.png';  


 
 function createHome() {
    const container = document.createElement('div');
    container.classList.add('home-wrapper');



    const leftContainer = document.createElement('div');
    leftContainer.classList.add('leftContainer');

    const leftWrapper = document.createElement('div');
    leftWrapper.classList.add('leftWrapper');

   //  const menuIcon = document.createElement('img');
   //  menuIcon.classList.add('menuIcon');
   //  menuIcon.src = menu;

    const headline = document.createElement('h1');
    headline.textContent = 'Where Every Bite Hits Different';

    const detail = document.createElement('p');
    detail.textContent = 'Classy 🍔Premium grass-fed beef Artisan buns Unforgettable taste';
 
    const Btns = document.createElement('div');
    Btns.classList.add('btns');


    const viewBtn = document.createElement('button');
    viewBtn.classList.add('viewBtn');
    viewBtn.textContent = 'View Menu';

    const bookBtn = document.createElement('button');
    bookBtn.classList.add('bookBtn');
    bookBtn.textContent = 'Book A Table';



    const rightContainer = document.createElement('div');
    rightContainer.classList.add('rightContainer');
 
    const homeImage = document.createElement('img');
    homeImage.classList.add('homeCake');
    homeImage.src = homeCake;

    const messageDecorate1 = document.createElement('div');
    messageDecorate1.classList.add('messageDecorate1');

    const messageText1 = document.createElement('span');
    messageText1.textContent = 'Crunchy, Saucy, Perfect ✨🍔💥';

    const messageDecorate2 = document.createElement('div');
    messageDecorate2.classList.add('messageDecorate2');
    const messageText2 = document.createElement('span');
    messageText2.textContent = 'Cheesy Dreams Come True 🧀💭';

    const messageDecorate3 = document.createElement('div');
    messageDecorate3.classList.add('messageDecorate3');
    const messageText3 = document.createElement('span');
    messageText3.textContent = 'Hot spicy Food 🌶';

    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('messageWrapper');


    messageDecorate1.appendChild(messageText1);
    messageDecorate2.appendChild(messageText2);
    messageDecorate3.appendChild(messageText3);

    messageWrapper.appendChild(messageDecorate1);
    messageWrapper.appendChild(messageDecorate2);
    messageWrapper.appendChild(messageDecorate3);


    const homeIcons1 = document.createElement('img');
    homeIcons1.classList.add('homeIcon1');
    homeIcons1.src = homeIcon1;
    const homeIcons2 = document.createElement('img');
    homeIcons2.classList.add('homeIcon2');
    homeIcons2.src = homeIcon2;

    Btns.appendChild(viewBtn)
    Btns.appendChild(bookBtn)

    leftWrapper.appendChild(headline);
    leftWrapper.appendChild(detail);
    leftWrapper.appendChild(Btns)
    

    leftContainer.appendChild(leftWrapper);

    rightContainer.appendChild(homeImage);
    rightContainer.appendChild(messageWrapper);

    // rightContainer.appendChild(homeIcons1);
    // rightContainer.appendChild(homeIcons2);


    container.appendChild(leftContainer);
    container.appendChild(rightContainer);


       return container;
  }
  
  export {createHome};
  


    // const content = document.getElementById('content');
    // content.innerHTML = ''; // Clear existing content
  
    // // Hero section
    // const hero = document.createElement('section');
    // hero.classList.add('hero');
  
    // const headline = document.createElement('h1');
    // headline.textContent = 'Freshly Baked Joy in Every Bite!';
  
    // const tagline = document.createElement('p');
    // tagline.textContent = 'Handmade with love and a pinch of sugar.';
  
    // const ctaBtn = document.createElement('button');
    // ctaBtn.textContent = 'See Our Menu';
    // ctaBtn.classList.add('cta');
  
    // hero.appendChild(headline);
    // hero.appendChild(tagline);
    // hero.appendChild(ctaBtn);
  
    // // Features section
    // const features = document.createElement('section');
    // features.classList.add('features');
  
    // const featureList = [
    //   { emoji: '🎂', text: 'Custom Cakes for All Occasions' },
    //   { emoji: '🥐', text: 'Fresh Pastries Baked Daily' },
    //   { emoji: '🍪', text: 'Handmade Cookies & Treats' },
    //   { emoji: '☕', text: 'Coffee That Hugs Your Soul' },
    // ];
  
    // featureList.forEach((item) => {
    //   const card = document.createElement('div');
    //   card.classList.add('feature-card');
  
    //   const icon = document.createElement('span');
    //   icon.textContent = item.emoji;
    //   icon.classList.add('emoji');
  
    //   const text = document.createElement('p');
    //   text.textContent = item.text;
  
    //   card.appendChild(icon);
    //   card.appendChild(text);
    //   features.appendChild(card);
    // });
  
    // // About preview section
    // const about = document.createElement('section');
    // about.classList.add('about');
  
    // const aboutTitle = document.createElement('h2');
    // aboutTitle.textContent = 'Meet the Bakers';
  
    // const aboutText = document.createElement('p');
    // aboutText.textContent = 'We’re a tiny team of pastry lovers baking magic since 2021. Come visit us or order online for a taste of something truly sweet.';
  
    // about.appendChild(aboutTitle);
    // about.appendChild(aboutText);
  
    // // Assemble all sections
    // content.appendChild(hero);
    // content.appendChild(features);
    // content.appendChild(about);