// index.js
import "./styles/styles.css";
import "./styles/menu.css";

import "./styles/popularDishes.css";
import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import {popularDishes} from "./popularDishes.js";

import { greeting } from "./greeting.js";
import odinImage from "./Assets/homeCake.png";
   
const image = document.createElement("img");
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

image.src = odinImage;
const content = document.querySelector('#content')
const body = document.querySelector('body')

body.addEventListener('click',function(event){
    const spanDiv = document.createElement('div');
    spanDiv.classList.add('circle');
     body.appendChild(spanDiv)

     spanDiv.style.top = (event.clientY - body.offsetTop) + 'px';
     spanDiv.style.left = (event.clientX - body.offsetLeft) + 'px';

     for(let i=0; i<8; i++){
        let span = document.createElement('span');
        span.style.transform = 'rotate('+(i * 45)+ 'deg';
        spanDiv.appendChild(span);
     }

     setTimeout(function(){
        spanDiv.remove();
     },1000);
})
content.appendChild(createHome());
content.appendChild(popularDishes());

home.addEventListener('click',()=>{
   content.innerHTML = "";
   content.appendChild(createHome());
   content.appendChild(popularDishes());

});

menu.addEventListener('click',()=>{
   // content.removeChild(createHome());
   content.innerHTML = "";   
   content.appendChild(createMenu());

     
});



// content.appendChild('');
   // popularDishes.remove();