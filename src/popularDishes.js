import homeIcon2 from './Assets/breadlogo.png';  
import { dishes } from './allfood';
  


function popularDishes() {
    const containerPopularDishes = document.createElement('div');
    containerPopularDishes.classList.add('popular-dishes-wrapper');

    const headerDiv =  document.createElement('div');
    headerDiv.classList.add('headerDiv');

    const headtitle = document.createElement('h1');
    headtitle.textContent = 'Popular Dishes';

    const popularDishesCards =  document.createElement('div');
    popularDishesCards.classList.add('popularDishesCards');
    
    const popularDishesCardscroll =  document.createElement('div');
    popularDishesCardscroll.classList.add('scrollCards');

    dishes.forEach((dish) => {
        // const dish = allpopularDishes[i];

        const popularDishesCard =  document.createElement('div');
        popularDishesCard.classList.add('popularDishesCard');

        popularDishesCard.innerHTML = `
        <div class="imgDiv" > 
            <img src="${dish.image}"  alt="${dish.name}">
        </div>
        <h2>${dish.name}</h2>
        <span>${dish.rating} </span>
        <p>${dish.description}</p>
        
        <div class="lowerBtn" >
           <span>${dish.price.toFixed(2)}</span>
           <button>${dish.buttonText}</button>
        </div>
        `;
        
        popularDishesCardscroll.appendChild(popularDishesCard)
       
    });
    // const imagev = document.createElement('img')
    // imagev.src = img2

    // popularDishesCards.appendChild(imagev)
    popularDishesCards.appendChild(popularDishesCardscroll)
    
    headerDiv.appendChild(headtitle)
    containerPopularDishes.appendChild(headerDiv)
    containerPopularDishes.appendChild(popularDishesCards)

    return containerPopularDishes;
}

export {popularDishes};