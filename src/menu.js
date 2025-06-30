import homeIcon2 from './Assets/breadlogo.png';  
import { dishes } from './allfood';

const filter = [
   "All",
   "Pizza",
   "Pasta",
   "Burgers",
   "Salads",
   "Seafood",
   "Grilled",
   "Sushi",
   "Vegetarian",
   "Vegan",
   "Desserts",
   "Drinks",
   "Soups",
   "Sandwiches",
   "Appetizers",
   "Breakfast",
   "Chicken",
   "Beef",
   "Rice Dishes",
   "Noodles",
   "Healthy",
   "Spicy"
];

function createMenu() {
  const containerMenu = document.createElement('div');
  containerMenu.classList.add('menu-wrapper');

  const filterDiv = document.createElement('div');
  filterDiv.classList.add('filterDiv');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const p = document.createElement('h1');
  p.textContent = "Our Regular Menu Pack";

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menuDiv');

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('Cards');

  // ✅ Function to display dishes
  function renderDishes(category) {
    cardsContainer.innerHTML = ""; // clear previous cards

    let filtered = (category === "All") ? dishes : dishes.filter(d => d.category === category);

    filtered.forEach(dish => {
      const dishCard = document.createElement('div');
      dishCard.classList.add('popularDishesCard');

      dishCard.innerHTML = `
        <div class="imgDiv"> 
          <img src="${dish.image}" alt="${dish.name}">
        </div>
        <h2>${dish.name}</h2>
        <span>${dish.rating}</span>
        <p>${dish.description}</p>
        <div class="lowerBtn">
          <span>$${dish.price.toFixed(2)}</span>
          <button>${dish.buttonText}</button>
        </div>
      `;

      cardsContainer.appendChild(dishCard);
    });
  }


  // ✅ Create filter buttons
filter.forEach(category => {
  const filterCard = document.createElement('div');
  filterCard.classList.add('filterWrapper');

  // Optional: give the .filter class an extra class to style later
  filterCard.innerHTML = `<div class="filter">${category}</div>`;

  filterCard.addEventListener('click', () => {
    renderDishes(category);

    // ✅ Remove active class from all filter buttons
    const allFilters = document.querySelectorAll('.filterWrapper');
    allFilters.forEach(btn => {
      btn.classList.remove('active-filter');
    });

    // ✅ Add active class to the clicked button
    filterCard.classList.add('active-filter');
  });
      // Set default active state to "All"
  const firstFilter = filterDiv.querySelector('.filterWrapper');
  if (firstFilter) firstFilter.classList.add('active-filter');


  filterDiv.appendChild(filterCard);
});


  // Initial render (All dishes)
  renderDishes("All");

  headerDiv.appendChild(p);
  menuDiv.appendChild(cardsContainer);
  containerMenu.appendChild(headerDiv);
  containerMenu.appendChild(filterDiv);
  containerMenu.appendChild(menuDiv);

  return containerMenu;
}

export { createMenu };
